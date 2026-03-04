"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { categories } from "@/lib/products";
import type { SortOption } from "@/lib/products";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "nombre-asc", label: "Nombre (A-Z)" },
  { value: "nombre-desc", label: "Nombre (Z-A)" },
  { value: "precio-asc", label: "Precio (menor a mayor)" },
  { value: "precio-desc", label: "Precio (mayor a menor)" },
];

const SEARCH_DEBOUNCE_MS = 350;

export function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const urlQ = searchParams.get("q") ?? "";
  const [searchInput, setSearchInput] = useState(urlQ);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const skipSyncRef = useRef(false);

  const categoria = searchParams.get("categoria") ?? "";
  const orden = (searchParams.get("orden") as SortOption) ?? "nombre-asc";

  const setParams = useCallback(
    (updates: { q?: string; categoria?: string; orden?: string }) => {
      const next = new URLSearchParams(searchParams.toString());
      if (updates.q !== undefined) {
        if (updates.q) next.set("q", updates.q);
        else next.delete("q");
      }
      if (updates.categoria !== undefined) {
        if (updates.categoria) next.set("categoria", updates.categoria);
        else next.delete("categoria");
      }
      if (updates.orden !== undefined) next.set("orden", updates.orden);
      skipSyncRef.current = true;
      startTransition(() => {
        router.replace(`/productos?${next.toString()}`, { scroll: false });
      });
    },
    [router, searchParams]
  );

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      if (searchInput !== urlQ) setParams({ q: searchInput });
      debounceRef.current = null;
    }, SEARCH_DEBOUNCE_MS);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [searchInput, urlQ, setParams]);

  useEffect(() => {
    if (skipSyncRef.current) {
      skipSyncRef.current = false;
      return;
    }
    setSearchInput(urlQ);
  }, [urlQ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <label className="flex-1 w-full sm:max-w-xs">
          <span className="sr-only">Buscar productos</span>
          <input
            type="search"
            placeholder="Buscar por nombre o descripción..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-stone-200 bg-surface text-ink placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
        </label>
        <label className="flex items-center gap-2 shrink-0">
          <span className="text-sm text-ink-tertiary whitespace-nowrap">Ordenar:</span>
          <select
            value={orden}
            onChange={(e) => setParams({ orden: e.target.value })}
            className="px-3 py-2 rounded-xl border border-stone-200 bg-surface text-ink text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex flex-wrap gap-2">
        <span className="text-sm text-ink-tertiary mr-1 self-center">Categoría:</span>
        <button
          type="button"
          onClick={() => setParams({ categoria: "" })}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            !categoria
              ? "bg-brand-600 text-white"
              : "bg-stone-100 text-ink-secondary hover:bg-stone-200"
          }`}
        >
          Todas
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setParams({ categoria: cat.slug })}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              categoria === cat.slug
                ? "bg-brand-600 text-white"
                : "bg-stone-100 text-ink-secondary hover:bg-stone-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {isPending && (
        <div className="text-sm text-ink-tertiary" aria-hidden>
          Actualizando…
        </div>
      )}
    </div>
  );
}
