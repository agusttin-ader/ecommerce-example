"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { CartItem as CartItemType } from "@/lib/types";

function CartLine({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;
  const subtotal = product.price * quantity;

  return (
    <div className="flex gap-4 py-6 border-b border-stone-200 last:border-0">
      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-stone-100 shrink-0 overflow-hidden flex items-center justify-center">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-stone-400 text-xs">Imagen</span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <Link
          href={`/productos/${product.slug}`}
          className="font-semibold text-ink hover:text-brand-600 line-clamp-2"
        >
          {product.name}
        </Link>
        <p className="text-ink-tertiary text-sm mt-0.5">
          {product.currency} {product.price.toLocaleString()} × {quantity}
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <div className="flex items-center rounded-lg border border-stone-200 overflow-hidden">
            <button
              type="button"
              onClick={() => updateQuantity(product.id, quantity - 1)}
              className="w-8 h-8 flex items-center justify-center text-ink-secondary hover:bg-stone-100"
              aria-label="Restar"
            >
              −
            </button>
            <span className="w-8 text-center text-sm font-medium tabular-nums">{quantity}</span>
            <button
              type="button"
              onClick={() => updateQuantity(product.id, quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-ink-secondary hover:bg-stone-100"
              aria-label="Sumar"
            >
              +
            </button>
          </div>
          <button
            type="button"
            onClick={() => removeItem(product.id)}
            className="text-sm text-ink-tertiary hover:text-red-600 transition-colors"
          >
            Quitar
          </button>
        </div>
      </div>
      <div className="text-right shrink-0">
        <p className="font-semibold text-ink">
          {product.currency} {subtotal.toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export function CartContent() {
  const { items, totalItems, totalAmount, currency, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="mt-10 rounded-3xl border border-stone-200 bg-surface p-12 text-center">
        <p className="text-ink-tertiary">Tu carrito está vacío.</p>
        <Link href="/productos" className="btn-primary mt-6 inline-block">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-10 flex flex-col lg:flex-row lg:gap-12">
      <div className="flex-1 card p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-ink-tertiary">
            {totalItems} {totalItems === 1 ? "producto" : "productos"}
          </span>
          <button
            type="button"
            onClick={clearCart}
            className="text-sm text-ink-tertiary hover:text-red-600 transition-colors"
          >
            Vaciar carrito
          </button>
        </div>
        {items.map((item) => (
          <CartLine key={item.product.id} item={item} />
        ))}
      </div>

      <div className="lg:w-80 shrink-0 mt-8 lg:mt-0">
        <div className="card p-6 sticky top-24">
          <h2 className="font-display font-semibold text-lg text-ink">Resumen</h2>
          <div className="mt-4 flex justify-between text-ink-secondary">
            <span>Subtotal ({totalItems} {totalItems === 1 ? "ítem" : "ítems"})</span>
            <span className="font-medium text-ink">
              {currency} {totalAmount.toLocaleString()}
            </span>
          </div>
          <Link
            href="/checkout"
            className="btn-primary w-full mt-6 flex justify-center"
          >
            Ir al checkout
          </Link>
          <Link href="/productos" className="block text-center text-sm text-brand-600 hover:underline mt-3">
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  );
}
