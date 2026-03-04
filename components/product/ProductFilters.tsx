"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import { categories, getPaginationOptions } from "@/lib/products";
import type { PerPage, SortOption } from "@/lib/products";

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
  const { perPageOptions } = getPaginationOptions();
  const porPagina = Math.min(24, Math.max(8, Number(searchParams.get("por_pagina")) || 12));

  const setParams = useCallback(
    (updates: { q?: string; categoria?: string; orden?: string; pagina?: number; por_pagina?: number }) => {
      const next = new URLSearchParams(searchParams.toString());
      if (updates.q !== undefined) {
        if (updates.q) next.set("q", updates.q);
        else next.delete("q");
        next.delete("pagina");
      }
      if (updates.categoria !== undefined) {
        if (updates.categoria) next.set("categoria", updates.categoria);
        else next.delete("categoria");
        next.delete("pagina");
      }
      if (updates.orden !== undefined) {
        next.set("orden", updates.orden);
        next.delete("pagina");
      }
      if (updates.pagina !== undefined) {
        if (updates.pagina <= 1) next.delete("pagina");
        else next.set("pagina", String(updates.pagina));
      }
      if (updates.por_pagina !== undefined) {
        next.set("por_pagina", String(updates.por_pagina));
        next.delete("pagina");
      }
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
    <div className="space-y-5 sm:space-y-6">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-between">
        <label className="flex-1 w-full sm:max-w-xs min-w-0">
          <span className="sr-only">Buscar productos</span>
          <input
            type="search"
            placeholder="Buscar productos..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="input-touch w-full px-4 py-3 rounded-xl border border-stone-200 bg-surface text-ink placeholder:text-stone-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:border-transparent dark:bg-stone-800 dark:border-stone-600 dark:text-stone-100 dark:placeholder:text-stone-500"
          />
        </label>
        <label className="flex items-center gap-2 shrink-0 min-w-0">
          <span className="text-sm text-ink-tertiary dark:text-stone-400 whitespace-nowrap">Ordenar:</span>
          <select
            value={orden}
            onChange={(e) => setParams({ orden: e.target.value })}
            className="input-touch min-w-0 px-3 py-2.5 rounded-xl border border-stone-200 bg-surface text-ink text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:bg-stone-800 dark:border-stone-600 dark:text-stone-100"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 shrink-0 min-w-0">
          <span className="text-sm text-ink-tertiary dark:text-stone-400 whitespace-nowrap">Mostrar:</span>
          <select
            value={porPagina}
            onChange={(e) => setParams({ por_pagina: Number(e.target.value) as PerPage })}
            className="input-touch min-w-0 px-3 py-2.5 rounded-xl border border-stone-200 bg-surface text-ink text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 dark:bg-stone-800 dark:border-stone-600 dark:text-stone-100"
          >
            {perPageOptions.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm text-ink-tertiary dark:text-stone-400 w-full sm:w-auto sm:mr-1 self-center">Categoría:</span>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setParams({ categoria: "" })}
            className={`min-h-touch px-3 py-2 rounded-full text-sm font-medium transition-colors ${
              !categoria
                ? "bg-brand-600 text-white dark:bg-brand-500"
                : "bg-stone-100 text-ink-secondary hover:bg-stone-200 active:bg-stone-300 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700 dark:active:bg-stone-600"
            }`}
          >
            Todas
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setParams({ categoria: cat.slug })}
              className={`min-h-touch px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                categoria === cat.slug
                  ? "bg-brand-600 text-white dark:bg-brand-500"
                  : "bg-stone-100 text-ink-secondary hover:bg-stone-200 active:bg-stone-300 dark:bg-stone-800 dark:text-stone-300 dark:hover:bg-stone-700 dark:active:bg-stone-600"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {isPending && (
        <div className="text-sm text-ink-tertiary dark:text-stone-400" aria-hidden>
          Actualizando…
        </div>
      )}
    </div>
  );
}
