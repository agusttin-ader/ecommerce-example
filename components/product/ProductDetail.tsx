"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/lib/types";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    if (quantity < 1) return;
    addItem(product, quantity);
    setAdded(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 min-w-0">
      <div className="aspect-square max-md:aspect-[4/3] bg-stone-100 rounded-2xl sm:rounded-3xl overflow-hidden flex items-center justify-center min-w-0 relative">
        {product.image ? (
          product.image.startsWith("/") ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          ) : (
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          )
        ) : (
          <span className="text-stone-400 text-sm font-medium">Imagen del producto</span>
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
              className="touch-target w-11 sm:w-12 flex items-center justify-center text-ink-secondary hover:bg-stone-100 active:bg-stone-200 text-ink transition-colors"
              aria-label="Restar cantidad"
            >
              −
            </button>
            <span className="w-10 sm:w-12 text-center font-medium tabular-nums text-sm sm:text-base" aria-live="polite">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((n) => n + 1)}
              className="touch-target w-11 sm:w-12 flex items-center justify-center text-ink-secondary hover:bg-stone-100 active:bg-stone-200 text-ink transition-colors"
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
          <p className="mt-4 text-sm text-brand-600 font-medium">
            Agregado al carrito.{" "}
            <Link href="/carrito" className="underline hover:no-underline">
              Ver carrito
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
