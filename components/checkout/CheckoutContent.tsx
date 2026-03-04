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
    <div className="flex justify-between gap-2 py-2 text-sm">
      <span className="text-ink-secondary line-clamp-2">
        {product.name} × {quantity}
      </span>
      <span className="font-medium text-ink shrink-0">
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
      <div className="mt-10 rounded-3xl border border-stone-200 bg-surface p-12 text-center">
        <p className="text-ink-tertiary">No hay productos en el carrito.</p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <Link href="/productos" className="btn-primary">
            Ver productos
          </Link>
          <Link href="/carrito" className="btn-secondary">
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
    <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-14">
      <div className="space-y-8">
        <section className="card p-6">
          <h2 className="font-display font-semibold text-lg text-ink mb-4">
            Datos de contacto
          </h2>
          <p className="text-sm text-ink-tertiary mb-4">
            En un ecommerce real aquí irían email, teléfono y envío. Por ahora es solo demo.
          </p>
          <div className="space-y-4">
            <label className="block">
              <span className="block text-sm font-medium text-ink-secondary mb-1">Nombre</span>
              <input
                type="text"
                value={contact.nombre}
                onChange={(e) => setContact((c) => ({ ...c, nombre: e.target.value }))}
                placeholder="Tu nombre"
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-surface text-ink placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </label>
            <label className="block">
              <span className="block text-sm font-medium text-ink-secondary mb-1">Email</span>
              <input
                type="email"
                value={contact.email}
                onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                placeholder="tu@email.com"
                className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-surface text-ink placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
              />
            </label>
          </div>
        </section>

        <section className="card p-6 border-dashed border-2 border-stone-200 bg-stone-50/50">
          <h2 className="font-display font-semibold text-lg text-ink mb-2">
            Método de pago
          </h2>
          <p className="text-sm text-ink-tertiary">
            Aquí iría la integración con Mercado Pago o tarjetas. Por ahora usá el botón para simular que pagaste (no se cobra nada).
          </p>
          <p className="mt-3 text-xs text-ink-tertiary">
            Ver <strong>ETAPA-6-PASOS-FINALES.md</strong> para conectar pagos reales.
          </p>
        </section>
      </div>

      <div>
        <div className="card p-6 sticky top-24">
          <h2 className="font-display font-semibold text-lg text-ink mb-4">
            Resumen del pedido
          </h2>
          <div className="divide-y divide-stone-200">
            {items.map((item) => (
              <OrderSummaryLine key={item.product.id} item={item} />
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-stone-200 flex justify-between items-center">
            <span className="font-semibold text-ink">Total</span>
            <span className="font-display font-bold text-xl text-ink">
              {currency} {totalAmount.toLocaleString()}
            </span>
          </div>
          <button
            type="button"
            onClick={handleSimularPago}
            disabled={loading}
            className="btn-primary w-full mt-6"
          >
            {loading ? "Procesando…" : "Simular pago (demo)"}
          </button>
          <Link
            href="/carrito"
            className="block text-center text-sm text-brand-600 hover:underline mt-3"
          >
            Volver al carrito
          </Link>
        </div>
      </div>
    </div>
  );
}
