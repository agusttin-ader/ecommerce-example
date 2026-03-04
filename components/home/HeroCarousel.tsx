"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Link from "next/link";
import type { Product } from "@/lib/types";

const ROTATE_MS = 5000;
const ROTATE_REDUCED_MS = 12000;

interface HeroCarouselProps {
  products: Product[];
}

export function HeroCarousel({ products }: HeroCarouselProps) {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    setIndex((i + products.length) % products.length);
  }, [products.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % products.length);
  }, [products.length]);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (products.length <= 1) return;
    const ms = reducedMotion ? ROTATE_REDUCED_MS : ROTATE_MS;
    const start = () => {
      if (intervalRef.current) return;
      intervalRef.current = setInterval(next, ms);
    };
    const stop = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
    if (!document.hidden) start();
    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [products.length, reducedMotion, next]);

  if (!products.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-stone-100 dark:bg-stone-900" aria-label="Productos destacados">
      <div className="relative w-full aspect-[21/9] min-h-[280px] max-h-[min(55vh,520px)]">
        {products.map((product, i) => (
          <Link
            key={product.id}
            href={`/productos/${product.slug}`}
            className={`absolute inset-0 block transition-opacity duration-600 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-inset ${
              i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            aria-hidden={i !== index}
            tabIndex={i === index ? 0 : -1}
          >
            {product.image && (
              <img
                src={product.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : undefined}
                decoding="async"
                sizes="100vw"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 text-white">
              <div className="container-narrow">
                <p className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight drop-shadow-sm">{product.name}</p>
                <p className="mt-1.5 text-sm sm:text-base text-white/90 tracking-tight">
                  {product.currency} {product.price.toLocaleString()}
                </p>
                <span className="mt-4 inline-block text-sm font-medium text-white/95 underline underline-offset-2 decoration-white/60">
                  Ver producto →
                </span>
              </div>
            </div>
          </Link>
        ))}

        {products.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5" role="tablist" aria-label="Slides">
            {products.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-250 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/50 ${
                  i === index ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
