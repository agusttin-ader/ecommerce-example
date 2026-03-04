import Link from "next/link";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/productos/${product.slug}`} className="group block card-hover">
      <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-stone-400 text-sm font-medium">Imagen</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
          <span className="price-tag text-white text-lg drop-shadow-md">
            {product.currency} {product.price.toLocaleString()}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-semibold text-ink group-hover:text-brand-600 transition-colors line-clamp-2 text-lg">
          {product.name}
        </h3>
        <p className="text-ink-tertiary text-sm mt-1 line-clamp-2">{product.description}</p>
        <span className="mt-3 inline-block text-sm font-semibold text-brand-600">
          Ver producto →
        </span>
      </div>
    </Link>
  );
}
