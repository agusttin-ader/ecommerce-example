"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

const MOBILE_BREAKPOINT = 768;

const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (t: Theme) => void;
  isMobile: boolean;
} | null>(null);

const STORAGE_KEY = "theme";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const mobileQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    const updateMobile = () => {
      const mobile = mobileQuery.matches;
      setIsMobile(mobile);
      if (mobile) {
        const next = prefersDark.matches ? "dark" : "light";
        setThemeState(next);
        document.documentElement.classList.toggle("dark", next === "dark");
      } else {
        const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
        const next: Theme = stored ?? (prefersDark.matches ? "dark" : "light");
        setThemeState(next);
        document.documentElement.classList.toggle("dark", next === "dark");
      }
    };

    updateMobile();
    mobileQuery.addEventListener("change", updateMobile);
    prefersDark.addEventListener("change", () => {
      if (mobileQuery.matches) {
        const next = getSystemTheme();
        setThemeState(next);
        document.documentElement.classList.toggle("dark", next === "dark");
      }
    });
    return () => {
      mobileQuery.removeEventListener("change", updateMobile);
    };
  }, []);

  const setTheme = (t: Theme) => {
    if (isMobile) return;
    setThemeState(t);
    localStorage.setItem(STORAGE_KEY, t);
    document.documentElement.classList.toggle("dark", t === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isMobile }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
