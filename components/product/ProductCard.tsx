import Link from "next/link";
import { ImageCredit } from "@/components/ui/ImageCredit";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/productos/${product.slug}`} className="group block card-hover min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:rounded-3xl dark:focus-visible:ring-offset-stone-950">
      <div className="relative aspect-[4/3] bg-stone-100 dark:bg-stone-800 overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-350 ease-out"
          />
          ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-stone-400 dark:text-stone-500 text-sm font-medium">Imagen</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent pt-4 pb-1.5 px-2 sm:pt-6 sm:pb-3 sm:px-3">
          <div className="flex justify-between items-end gap-2">
            <span className="price-tag text-white text-xs sm:text-base lg:text-lg font-semibold drop-shadow-sm truncate max-w-[85%]">
              {product.currency} {product.price.toLocaleString()}
            </span>
            {product.imageCredit && (
              <span className="shrink-0 text-white/95 drop-shadow-sm">
                <ImageCredit credit={product.imageCredit} compact className="text-white/95" noLink />
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="p-2.5 sm:p-4 lg:p-5 min-w-0">
        <h3 className="font-display font-semibold text-ink group-hover:text-brand-700 dark:text-stone-100 dark:group-hover:text-brand-400 transition-colors line-clamp-2 text-xs sm:text-base lg:text-lg leading-tight tracking-tight">
          {product.name}
        </h3>
        <p className="text-ink-tertiary dark:text-stone-400 text-xs sm:text-sm mt-0.5 sm:mt-1 line-clamp-2">{product.description}</p>
        <span className="mt-1.5 sm:mt-3 inline-block text-xs sm:text-sm font-medium text-brand-700 dark:text-brand-400 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
          Ver →
        </span>
      </div>
    </Link>
  );
}
