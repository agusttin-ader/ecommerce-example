"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import type { CartItem as CartItemType } from "@/lib/types";
import { useState } from "react";

function OrderSummaryLine({ item }: { item: CartItemType }) {
  const { product, quantity } = item;
  const subtotal = product.price * quantity;
  return (
    <div className="flex justify-between gap-2 py-2 text-sm min-w-0">
      <span className="text-ink-secondary dark:text-stone-400 line-clamp-2 min-w-0">
        {product.name} × {quantity}
      </span>
      <span className="font-medium text-ink dark:text-stone-100 shrink-0">
        {product.currency} {subtotal.toLocaleString()}
      </span>
    </div>
  );
}

export function CheckoutContent() {
  const router = useRouter();
  const { items, totalAmount, currency, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState({ nombre: "", email: "" });

  if (items.length === 0) {
    return (
      <div className="mt-8 sm:mt-10 rounded-2xl sm:rounded-3xl border border-stone-200 dark:border-stone-700 bg-surface dark:bg-stone-900 p-8 sm:p-12 text-center">
        <p className="text-ink-tertiary dark:text-stone-400 text-sm sm:text-base">No hay productos en el carrito.</p>
        <div className="flex flex-col xs:flex-row flex-wrap justify-center gap-3 mt-6">
          <Link href="/productos" className="btn-primary w-full xs:w-auto text-center">
            Ver productos
          </Link>
          <Link href="/carrito" className="btn-secondary w-full xs:w-auto text-center">
            Ir al carrito
          </Link>
        </div>
      </div>
    );
  }

  const handleSimularPago = () => {
    setLoading(true);
    clearCart();
    router.push("/checkout/gracias");
  };

  return (
    <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 min-w-0">
      <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
        <section className="card p-4 sm:p-6">
          <h2 className="font-display font-semibold text-base sm:text-lg text-ink dark:text-stone-100 mb-3 sm:mb-4">
            Datos de contacto
          </h2>
          <p className="text-sm text-ink-tertiary dark:text-stone-400 mb-4">
            Completá tus datos para que podamos contactarte con el pedido.
          </p>
          <div className="space-y-4">
            <label htmlFor="checkout-nombre" className="block min-w-0">
              <span className="block text-sm font-medium text-ink-secondary dark:text-stone-400 mb-1">Nombre</span>
              <input
                id="checkout-nombre"
                type="text"
                value={contact.nombre}
                onChange={(e) => setContact((c) => ({ ...c, nombre: e.target.value }))}
                placeholder="Tu nombre"
                autoComplete="name"
                className="input-touch w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-surface text-ink placeholder:text-stone-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 min-w-0 dark:bg-stone-800 dark:border-stone-600 dark:text-stone-100 dark:placeholder:text-stone-500"
              />
            </label>
            <label htmlFor="checkout-email" className="block min-w-0">
              <span className="block text-sm font-medium text-ink-secondary dark:text-stone-400 mb-1">Email</span>
              <input
                id="checkout-email"
                type="email"
                value={contact.email}
                onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                placeholder="tu@email.com"
                autoComplete="email"
                className="input-touch w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-surface text-ink placeholder:text-stone-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 min-w-0 dark:bg-stone-800 dark:border-stone-600 dark:text-stone-100 dark:placeholder:text-stone-500"
              />
            </label>
          </div>
        </section>

        <section className="card p-4 sm:p-6 border-dashed border-2 border-stone-200 dark:border-stone-600 bg-stone-50/50 dark:bg-stone-800/50">
          <h2 className="font-display font-semibold text-base sm:text-lg text-ink dark:text-stone-100 mb-2">
            Método de pago
          </h2>
          <p className="text-sm text-ink-tertiary dark:text-stone-400">
            Al confirmar, recibirás un mail con los detalles del pedido.
          </p>
        </section>
      </div>

      <div className="order-1 lg:order-2 min-w-0">
        <div className="card p-4 sm:p-6 lg:sticky lg:top-24">
          <h2 className="font-display font-semibold text-base sm:text-lg text-ink dark:text-stone-100 mb-4">
            Resumen del pedido
          </h2>
          <div className="divide-y divide-stone-200 min-w-0">
            {items.map((item) => (
              <OrderSummaryLine key={item.product.id} item={item} />
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-stone-200 flex justify-between items-center gap-2 min-w-0">
            <span className="font-semibold text-ink dark:text-stone-100">Total</span>
            <span className="font-display font-bold text-lg sm:text-xl text-ink dark:text-stone-100 shrink-0">
              {currency} {totalAmount.toLocaleString()}
            </span>
          </div>
          <button
            type="button"
            onClick={handleSimularPago}
            disabled={loading}
            className="btn-primary w-full mt-5 sm:mt-6"
          >
            {loading ? "Procesando…" : "Confirmar compra"}
          </button>
          <Link
            href="/carrito"
            className="block text-center text-sm text-brand-600 dark:text-brand-400 hover:underline mt-3 min-h-touch flex items-center justify-center"
          >
            Volver al carrito
          </Link>
        </div>
      </div>
    </div>
  );
}
