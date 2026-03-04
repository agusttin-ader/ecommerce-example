import { Suspense } from "react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductFilters } from "@/components/product/ProductFilters";
import { getFilteredAndSortedProducts } from "@/lib/products";
import type { SortOption } from "@/lib/products";

interface PageProps {
  searchParams: Promise<{ q?: string; categoria?: string; orden?: string }>;
}

export default async function ProductosPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filters = {
    q: params.q,
    categoria: params.categoria,
    orden: (params.orden as SortOption) || "nombre-asc",
  };
  const products = getFilteredAndSortedProducts(filters);

  return (
    <div className="container-narrow py-8 sm:py-12 lg:py-16 min-w-0">
      <h1 className="page-heading">Productos</h1>
      <p className="page-subheading mt-1">
        Buscá por nombre, filtrá por categoría y ordená los resultados.
      </p>

      <div className="mt-6 sm:mt-8">
        <Suspense fallback={<div className="h-24 animate-pulse rounded-xl bg-stone-100" />}>
          <ProductFilters />
        </Suspense>
      </div>

      <p className="mt-5 sm:mt-6 text-sm text-ink-tertiary">
        {products.length} {products.length === 1 ? "producto" : "productos"}
      </p>
      <div className="mt-5 sm:mt-6">
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
