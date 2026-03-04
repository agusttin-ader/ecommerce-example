import { ProductCard } from "./ProductCard";
import type { Product } from "@/lib/types";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl sm:rounded-3xl border border-stone-200 bg-surface py-12 sm:py-16 text-center text-ink-tertiary text-sm sm:text-base px-4">
        No hay productos que coincidan con los filtros.
      </div>
    );
  }

  const stagger = ["stagger-1", "stagger-2", "stagger-3", "stagger-4", "stagger-5", "stagger-6", "stagger-7", "stagger-8", "stagger-9"];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6 xl:gap-8 min-w-0">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`animate-card-in opacity-0 ${stagger[Math.min(index, 8)]}`}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}
