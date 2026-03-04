import { Suspense } from "react";
import { ProductGrid } from "@/components/product/ProductGrid";
import { ProductFilters } from "@/components/product/ProductFilters";
import { Pagination } from "@/components/product/Pagination";
import { getPaginatedProducts, getPaginationOptions } from "@/lib/products";
import type { SortOption } from "@/lib/products";

interface PageProps {
  searchParams: Promise<{ q?: string; categoria?: string; orden?: string; pagina?: string; por_pagina?: string }>;
}

export default async function ProductosPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const filters = {
    q: params.q,
    categoria: params.categoria,
    orden: (params.orden as SortOption) || "nombre-asc",
  };
  const { defaultPerPage } = getPaginationOptions();
  const page = Math.max(1, Number(params.pagina) || 1);
  const perPage = Math.min(24, Math.max(8, Number(params.por_pagina) || defaultPerPage));
  const { items, totalCount, totalPages } = getPaginatedProducts(filters, page, perPage);

  return (
    <div className="container-narrow py-8 sm:py-12 lg:py-16 min-w-0">
      <h1 className="page-heading">Productos</h1>
      <p className="page-subheading mt-1">
        Explorá el catálogo por categoría y orden.
      </p>

      <div className="mt-6 sm:mt-8">
        <Suspense fallback={<div className="h-24 animate-pulse rounded-xl bg-stone-100 dark:bg-stone-800" />}>
          <ProductFilters />
        </Suspense>
      </div>

      <p className="mt-5 sm:mt-6 text-sm text-ink-tertiary dark:text-stone-400">
        {totalCount} {totalCount === 1 ? "producto" : "productos"}
        {totalPages > 1 && ` · Página ${page} de ${totalPages}`}
      </p>
      <div className="mt-5 sm:mt-6">
        <ProductGrid products={items} />
      </div>
      <Suspense fallback={null}>
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          totalCount={totalCount}
          perPage={perPage}
        />
      </Suspense>
    </div>
  );
}
