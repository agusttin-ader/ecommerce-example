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
    <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-md border-b border-stone-200/80">
      <div className="h-1 w-full bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700" aria-hidden />
      <div className="container-narrow">
        <div className="h-16 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="font-display font-bold text-xl text-ink tracking-tight hover:text-brand-600 transition-colors"
          >
            Ecommerce
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link relative ${link.href === "/carrito" && totalItems > 0 ? "pr-7" : ""}`}
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

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-stone-100 transition-colors"
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

      {/* Mobile nav */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden transition-all duration-200 ${
          mobileOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <nav className="container-narrow py-4 pb-6 flex flex-col gap-1 border-t border-stone-200/80">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive(link.href) && (link.href === "/" ? pathname === "/" : pathname.startsWith(link.href))
                  ? "bg-brand-100 text-brand-700"
                  : "text-ink-secondary hover:bg-stone-100 hover:text-ink"
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
