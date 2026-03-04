"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/productos", label: "Productos" },
  { href: "/carrito", label: "Carrito" },
  { href: "/checkout", label: "Checkout" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  const isActive = (path: string) =>
    pathname === path || (path !== "/" && pathname.startsWith(path));

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b border-stone-200/60 dark:bg-stone-950/95 dark:border-stone-800 safe-area-inset-top">
      <div className="h-0.5 w-full bg-gradient-to-r from-brand-600 via-brand-700 to-brand-800 min-h-[1px] dark:from-brand-500 dark:via-brand-600 dark:to-brand-700" aria-hidden />
      <div className="container-narrow">
        <div className="h-14 min-h-touch sm:h-16 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="font-display font-semibold text-lg sm:text-xl text-ink tracking-tight hover:text-brand-700 dark:text-stone-100 dark:hover:text-brand-400 transition-colors shrink-0 min-w-0 truncate"
          >
            Tienda
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5 shrink-0">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link relative min-h-touch flex items-center ${link.href === "/carrito" && totalItems > 0 ? "pr-7" : ""}`}
                data-active={link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)}
              >
                {link.label}
                {link.href === "/carrito" && totalItems > 0 && (
                  <span
                    className="absolute right-0 top-1/2 -translate-y-1/2 min-w-[1.25rem] h-5 px-1 flex items-center justify-center rounded-full bg-brand-600 text-white text-xs font-semibold dark:bg-brand-500"
                    aria-label={`${totalItems} en el carrito`}
                  >
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile: solo menú (sin toggle; en móvil el tema sigue siempre la preferencia del sistema) */}
          <div className="flex items-center gap-1 md:hidden">
            <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="touch-target flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-stone-100 active:bg-stone-200 dark:hover:bg-stone-800 dark:active:bg-stone-700 transition-colors -mr-1"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className={`block w-5 h-0.5 bg-ink dark:bg-stone-100 transition-transform ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span className={`block w-5 h-0.5 bg-ink dark:bg-stone-100 ${mobileOpen ? "opacity-0" : ""}`} />
            <span
              className={`block w-5 h-0.5 bg-ink dark:bg-stone-100 transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
          </div>
        </div>
      </div>

      {/* Mobile nav - each link min 44px height */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-all duration-200 ease-out ${
          mobileOpen ? "max-h-[280px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="container-narrow py-3 pb-6 flex flex-col gap-0.5 border-t border-stone-200/80 dark:border-stone-800">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between min-h-touch px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive(link.href) && (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                  ? "bg-brand-100 text-brand-700 dark:bg-brand-900/40 dark:text-brand-300"
                  : "text-ink-secondary hover:bg-stone-100 hover:text-ink active:bg-stone-200 dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100 dark:active:bg-stone-700"
              }`}
            >
              {link.label}
              {link.href === "/carrito" && totalItems > 0 && (
                <span className="min-w-[1.25rem] h-5 px-1 flex items-center justify-center rounded-full bg-brand-600 text-white text-xs font-semibold dark:bg-brand-500">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
