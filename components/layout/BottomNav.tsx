"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";

const ITEMS = [
  { href: "/", label: "Inicio", icon: "home" },
  { href: "/productos", label: "Productos", icon: "grid" },
  { href: "/carrito", label: "Carrito", icon: "cart" },
] as const;

function Icon({ name }: { name: "home" | "grid" | "cart" }) {
  const className = "w-6 h-6 shrink-0";
  if (name === "home") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    );
  }
  if (name === "grid") {
    return (
      <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    );
  }
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}

export function BottomNav() {
  const pathname = usePathname();
  const { totalItems } = useCart();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-surface/98 dark:bg-stone-950/98 backdrop-blur-lg border-t border-stone-200/80 dark:border-stone-800 safe-area-inset-bottom"
      aria-label="Navegación principal"
    >
      <div className="h-14 min-h-touch flex items-center justify-around px-2">
        {ITEMS.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center gap-0.5 min-w-[4rem] min-h-touch rounded-xl transition-colors duration-200 active:scale-95 ${
              isActive(href)
                ? "text-brand-600 dark:text-brand-400"
                : "text-ink-tertiary hover:text-ink dark:text-stone-400 dark:hover:text-stone-100"
            }`}
            aria-current={isActive(href) ? "page" : undefined}
          >
            <span className="relative inline-flex">
              <Icon name={icon} />
              {href === "/carrito" && totalItems > 0 && (
                <span
                  className="absolute -top-1.5 -right-2 min-w-[1.125rem] h-[1.125rem] flex items-center justify-center rounded-full bg-brand-600 text-white text-[10px] font-bold dark:bg-brand-500 animate-pop-in"
                  aria-label={`${totalItems} en el carrito`}
                >
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </span>
            <span className="text-[10px] font-medium tabular-nums">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
