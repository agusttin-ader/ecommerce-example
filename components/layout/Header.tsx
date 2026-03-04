"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

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
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-stone-200/80 safe-area-inset-top">
      <div className="h-1 w-full bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 min-h-[2px]" aria-hidden />
      <div className="container-narrow">
        <div className="h-14 min-h-touch sm:h-16 flex items-center justify-between gap-3">
          <Link
            href="/"
            className="font-display font-bold text-lg sm:text-xl text-ink tracking-tight hover:text-brand-600 transition-colors shrink-0 min-w-0 truncate"
          >
            Ecommerce
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
                    className="absolute right-0 top-1/2 -translate-y-1/2 min-w-[1.25rem] h-5 px-1 flex items-center justify-center rounded-full bg-brand-600 text-white text-xs font-semibold"
                    aria-label={`${totalItems} en el carrito`}
                  >
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button - 44px touch target */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden touch-target flex flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-stone-100 active:bg-stone-200 transition-colors -mr-1"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className={`block w-5 h-0.5 bg-ink transition-transform ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span className={`block w-5 h-0.5 bg-ink ${mobileOpen ? "opacity-0" : ""}`} />
            <span
              className={`block w-5 h-0.5 bg-ink transition-transform ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
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
        <nav className="container-narrow py-3 pb-6 flex flex-col gap-0.5 border-t border-stone-200/80">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between min-h-touch px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                isActive(link.href) && (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                  ? "bg-brand-100 text-brand-700"
                  : "text-ink-secondary hover:bg-stone-100 hover:text-ink active:bg-stone-200"
              }`}
            >
              {link.label}
              {link.href === "/carrito" && totalItems > 0 && (
                <span className="min-w-[1.25rem] h-5 px-1 flex items-center justify-center rounded-full bg-brand-600 text-white text-xs font-semibold">
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
