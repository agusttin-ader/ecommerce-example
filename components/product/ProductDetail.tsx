"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ImageCredit } from "@/components/ui/ImageCredit";
import type { Product } from "@/lib/types";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    if (!added) return;
    const t = setTimeout(() => setAdded(false), 4000);
    return () => clearTimeout(t);
  }, [added]);

  const handleAddToCart = () => {
    if (quantity < 1) return;
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 min-w-0">
      <div className="aspect-square max-md:aspect-[4/3] bg-stone-100 dark:bg-stone-800 rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center min-w-0 relative animate-fade-in">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <span className="text-stone-400 dark:text-stone-500 text-sm font-medium">Imagen del producto</span>
        )}
        {product.imageCredit && (
          <div className="absolute bottom-2 left-2 right-2 flex justify-end">
            <ImageCredit credit={product.imageCredit} />
          </div>
        )}
      </div>
      <div className="flex flex-col min-w-0">
        <h1 className="font-display text-display-md text-ink">
          {product.name}
        </h1>
        <p className="price-tag text-xl sm:text-2xl mt-3 sm:mt-4">
          {product.currency} {product.price.toLocaleString()}
        </p>
        <p className="mt-4 sm:mt-6 text-ink-secondary leading-relaxed text-sm sm:text-base">{product.description}</p>

        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
          <div className="flex items-center rounded-xl border border-stone-200 overflow-hidden shrink-0">
            <button
              type="button"
              onClick={() => setQuantity((n) => Math.max(1, n - 1))}
              className="touch-target w-11 sm:w-12 flex items-center justify-center text-ink-secondary hover:bg-stone-100 active:bg-stone-200 dark:text-stone-400 dark:hover:bg-stone-700 dark:active:bg-stone-600 text-ink dark:text-stone-100 transition-colors"
              aria-label="Restar cantidad"
            >
              −
            </button>
            <span className="w-10 sm:w-12 text-center font-medium tabular-nums text-sm sm:text-base dark:text-stone-100" aria-live="polite">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((n) => n + 1)}
              className="touch-target w-11 sm:w-12 flex items-center justify-center text-ink-secondary hover:bg-stone-100 active:bg-stone-200 dark:text-stone-400 dark:hover:bg-stone-700 dark:active:bg-stone-600 text-ink dark:text-stone-100 transition-colors"
              aria-label="Sumar cantidad"
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className="btn-primary w-full sm:min-w-[200px] sm:w-auto"
          >
            Agregar al carrito {quantity > 1 && `(${quantity})`}
          </button>
        </div>

        {added && (
          <p
            role="status"
            className="mt-4 text-sm text-brand-600 dark:text-brand-400 font-medium animate-success-in opacity-0"
          >
            Agregado al carrito.{" "}
            <Link href="/carrito" className="underline hover:no-underline dark:text-brand-400">
              Ver carrito
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
