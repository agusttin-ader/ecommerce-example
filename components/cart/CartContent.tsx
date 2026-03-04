"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { CartItem as CartItemType } from "@/lib/types";

function CartLine({ item }: { item: CartItemType }) {
  const { updateQuantity, removeItem } = useCart();
  const { product, quantity } = item;
  const subtotal = product.price * quantity;

  return (
    <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 py-4 sm:py-6 border-b border-stone-200 last:border-0 min-w-0">
      <div className="flex gap-3 xs:gap-4 xs:min-w-0 flex-1">
        <div className="w-16 h-16 xs:w-20 sm:w-24 sm:h-24 rounded-xl bg-stone-100 shrink-0 overflow-hidden flex items-center justify-center">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-stone-400 text-xs">Imagen</span>
        )}
        </div>
        <div className="flex-1 min-w-0">
          <Link
            href={`/productos/${product.slug}`}
            className="font-semibold text-ink hover:text-brand-600 line-clamp-2 text-sm sm:text-base"
          >
            {product.name}
          </Link>
        <p className="text-ink-tertiary text-xs sm:text-sm mt-0.5">
            {product.currency} {product.price.toLocaleString()} × {quantity}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="flex items-center rounded-lg border border-stone-200 overflow-hidden">
              <button
                type="button"
                onClick={() => updateQuantity(product.id, quantity - 1)}
                className="touch-target min-w-[44px] w-10 h-10 flex items-center justify-center text-ink-secondary hover:bg-stone-100 active:bg-stone-200"
                aria-label="Restar"
              >
                −
              </button>
              <span className="w-8 text-center text-sm font-medium tabular-nums">{quantity}</span>
              <button
                type="button"
                onClick={() => updateQuantity(product.id, quantity + 1)}
                className="touch-target min-w-[44px] w-10 h-10 flex items-center justify-center text-ink-secondary hover:bg-stone-100 active:bg-stone-200"
                aria-label="Sumar"
              >
                +
              </button>
            </div>
            <button
              type="button"
              onClick={() => removeItem(product.id)}
              className="text-sm text-ink-tertiary hover:text-red-600 active:text-red-700 transition-colors min-h-touch flex items-center"
            >
              Quitar
            </button>
          </div>
        </div>
      </div>
      <div className="text-left xs:text-right shrink-0">
        <p className="font-semibold text-ink text-sm sm:text-base">
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
      <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-stone-200 bg-surface p-8 sm:p-12 text-center">
        <p className="text-ink-tertiary text-sm sm:text-base">Tu carrito está vacío.</p>
        <Link href="/productos" className="btn-primary mt-6 inline-block w-full sm:w-auto">
          Ver productos
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-8 sm:mt-10 flex flex-col lg:flex-row lg:gap-10 xl:gap-12 min-w-0">
      <div className="flex-1 card p-4 sm:p-6 min-w-0 order-2 lg:order-1">
        <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3 mb-4">
          <span className="text-sm text-ink-tertiary">
            {totalItems} {totalItems === 1 ? "producto" : "productos"}
          </span>
          <button
            type="button"
            onClick={clearCart}
            className="text-sm text-ink-tertiary hover:text-red-600 active:text-red-700 transition-colors min-h-touch flex items-center"
          >
            Vaciar carrito
          </button>
        </div>
        {items.map((item) => (
          <CartLine key={item.product.id} item={item} />
        ))}
      </div>

      <div className="lg:w-80 xl:w-96 shrink-0 mt-6 lg:mt-0 order-1 lg:order-2 min-w-0">
        <div className="card p-5 sm:p-6 lg:sticky lg:top-24">
          <h2 className="font-display font-semibold text-lg text-ink">Resumen</h2>
          <div className="mt-4 flex justify-between text-ink-secondary text-sm sm:text-base">
            <span>Subtotal ({totalItems} {totalItems === 1 ? "ítem" : "ítems"})</span>
            <span className="font-medium text-ink">
              {currency} {totalAmount.toLocaleString()}
            </span>
          </div>
          <Link
            href="/checkout"
            className="btn-primary w-full mt-5 sm:mt-6 flex justify-center"
          >
            Ir al checkout
          </Link>
          <Link href="/productos" className="block text-center text-sm text-brand-600 hover:underline mt-3 min-h-touch flex items-center justify-center">
            Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  );
}
