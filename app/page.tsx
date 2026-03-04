import Link from "next/link";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-surface-muted bg-hero-pattern">
        <div className="container-narrow py-20 sm:py-28 lg:py-36">
          <h1 className="font-display text-display-xl text-ink animate-fade-in">
            Bienvenido a la tienda
          </h1>
          <p className="mt-4 max-w-xl text-lg text-ink-secondary animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Diseño innovador y óptimo. Cuando definas el rubro, subimos contenido e imágenes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Link href="/productos" className="btn-primary">
              Ver productos
            </Link>
            <Link href="/carrito" className="btn-secondary">
              Ir al carrito
            </Link>
          </div>
        </div>
      </section>

      <section className="container-narrow py-14 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h2 className="display-heading text-display-md">Productos</h2>
            <p className="page-subheading mt-1">Listado de productos de ejemplo</p>
          </div>
          <Link
            href="/productos"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700 transition-colors"
          >
            Ver todos →
          </Link>
        </div>
        <ProductGrid products={products} />
      </section>
    </>
  );
}
