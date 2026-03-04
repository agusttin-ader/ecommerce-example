import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        brand: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#0e5c54",
          900: "#134e4a",
          950: "#042f2e",
        },
        surface: {
          DEFAULT: "#ffffff",
          muted: "#fafaf9",
          elevated: "#ffffff",
        },
        ink: {
          DEFAULT: "#0c0c0c",
          secondary: "#404040",
          tertiary: "#737373",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(1.875rem, 4vw + 1rem, 4rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(1.625rem, 4vw, 3rem)", { lineHeight: "1.12", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.25rem, 2vw + 0.5rem, 2.25rem)", { lineHeight: "1.25", letterSpacing: "-0.02em" }],
      },
      letterSpacing: {
        "tight-premium": "-0.025em",
      },
      minHeight: {
        touch: "44px",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgb(0 0 0 / 0.04), 0 6px 16px -4px rgb(0 0 0 / 0.06)",
        card: "0 1px 2px 0 rgb(0 0 0 / 0.03), 0 2px 8px -2px rgb(0 0 0 / 0.04)",
        "card-hover": "0 4px 6px -2px rgb(0 0 0 / 0.04), 0 12px 24px -4px rgb(0 0 0 / 0.08), 0 24px 48px -12px rgb(0 0 0 / 0.06)",
        glow: "0 0 0 1px rgb(15 118 110 / 0.08), 0 2px 12px -2px rgb(15 118 110 / 0.15)",
        "premium": "0 2px 8px -2px rgb(0 0 0 / 0.05), 0 8px 24px -4px rgb(0 0 0 / 0.08)",
      },
      animation: {
        "fade-in": "fadeIn 0.35s ease-out forwards",
        "slide-up": "slideUp 0.4s ease-out forwards",
        "card-in": "cardIn 0.35s ease-out forwards",
        "shimmer": "shimmer 1.5s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        cardIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { backgroundPosition: "200% 0" },
          "50%": { backgroundPosition: "-200% 0" },
        },
      },
      transitionDuration: {
        250: "250ms",
        350: "350ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern": "radial-gradient(ellipse 85% 55% at 50% -15%, rgb(15 118 110 / 0.08), transparent)",
        "hero-pattern-premium": "radial-gradient(ellipse 100% 60% at 50% -10%, rgb(15 118 110 / 0.06), transparent 55%)",
        "hero-pattern-dark": "radial-gradient(ellipse 100% 60% at 50% -10%, rgb(15 118 110 / 0.12), transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
