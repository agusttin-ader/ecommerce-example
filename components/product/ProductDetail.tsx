"use client";

import { useState } from "react";
import Link from "next/link";
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
    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
      <div className="aspect-square bg-stone-100 rounded-3xl overflow-hidden flex items-center justify-center">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-stone-400 text-sm font-medium">Imagen del producto</span>
        )}
      </div>
      <div className="flex flex-col">
        <h1 className="font-display text-display-md text-ink">
          {product.name}
        </h1>
        <p className="price-tag text-2xl mt-4">
          {product.currency} {product.price.toLocaleString()}
        </p>
        <p className="mt-6 text-ink-secondary leading-relaxed">{product.description}</p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <div className="flex items-center rounded-xl border border-stone-200 overflow-hidden">
            <button
              type="button"
              onClick={() => setQuantity((n) => Math.max(1, n - 1))}
              className="w-10 h-10 flex items-center justify-center text-ink-secondary hover:bg-stone-100 hover:text-ink transition-colors"
              aria-label="Restar cantidad"
            >
              −
            </button>
            <span className="w-12 text-center font-medium tabular-nums" aria-live="polite">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((n) => n + 1)}
              className="w-10 h-10 flex items-center justify-center text-ink-secondary hover:bg-stone-100 hover:text-ink transition-colors"
              aria-label="Sumar cantidad"
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className="btn-primary min-w-[200px]"
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
