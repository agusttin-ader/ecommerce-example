import type { Metadata } from "next";
import Script from "next/script";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tienda",
  description: "Tu tienda online. Productos con envío a todo el país.",
};

const themeScript = `
(function() {
  var isMobile = window.innerWidth < 768;
  var dark;
  if (isMobile) {
    dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  } else {
    var t = localStorage.getItem('theme');
    var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
    dark = t === 'dark' || (!t && d);
  }
  if (dark) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${syne.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans overflow-x-hidden bg-surface-muted text-ink dark:bg-stone-950 dark:text-stone-100">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        <ThemeProvider>
          <CartProvider>
            <Header />
            <main id="main-content" className="flex-1 w-full min-w-0 pb-nav md:pb-0" tabIndex={-1}>
              {children}
            </main>
            <Footer />
            <BottomNav />
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
