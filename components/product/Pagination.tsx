"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  perPage: number;
}

function buildUrl(searchParams: URLSearchParams, page: number, perPage?: number): string {
  const next = new URLSearchParams(searchParams.toString());
  next.set("pagina", String(page));
  if (perPage !== undefined) next.set("por_pagina", String(perPage));
  return `/productos?${next.toString()}`;
}

export function Pagination({ currentPage, totalPages, totalCount, perPage }: PaginationProps) {
  const searchParams = useSearchParams();

  if (totalPages <= 1) return null;

  const from = (currentPage - 1) * perPage + 1;
  const to = Math.min(currentPage * perPage, totalCount);

  const pageNumbers: (number | "ellipsis")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);
  } else {
    pageNumbers.push(1);
    if (currentPage > 3) pageNumbers.push("ellipsis");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pageNumbers.push(i);
    if (currentPage < totalPages - 2) pageNumbers.push("ellipsis");
    pageNumbers.push(totalPages);
  }

  return (
    <nav
      className="mt-8 sm:mt-10 flex flex-col xs:flex-row items-center justify-between gap-4 border-t border-stone-200 dark:border-stone-700 pt-6"
      aria-label="Paginación de productos"
    >
      <p className="text-sm text-ink-tertiary dark:text-stone-400 order-2 xs:order-1">
        Mostrando {from}–{to} de {totalCount}
      </p>
      <ul className="flex items-center gap-1 order-1 xs:order-2" role="list">
        <li>
          <Link
            href={buildUrl(searchParams, currentPage - 1)}
            className={`inline-flex items-center justify-center min-h-touch min-w-[2.75rem] px-2 rounded-xl text-sm font-medium transition-colors duration-200 active:scale-95 ${
              currentPage <= 1
                ? "pointer-events-none text-stone-300 dark:text-stone-600"
                : "text-ink-secondary hover:bg-stone-100 hover:text-ink dark:hover:bg-stone-800 dark:hover:text-stone-100"
            }`}
            aria-disabled={currentPage <= 1}
            aria-label="Página anterior"
          >
            ←
          </Link>
        </li>
        {pageNumbers.map((n, i) =>
          n === "ellipsis" ? (
            <li key={`ellipsis-${i}`} className="px-1 text-ink-tertiary dark:text-stone-500" aria-hidden>
              …
            </li>
          ) : (
            <li key={n}>
              <Link
                href={buildUrl(searchParams, n)}
                className={`inline-flex items-center justify-center min-h-touch min-w-[2.75rem] rounded-xl text-sm font-medium transition-colors duration-200 active:scale-95 ${
                  n === currentPage
                    ? "bg-brand-600 text-white dark:bg-brand-500"
                    : "text-ink-secondary hover:bg-stone-100 hover:text-ink dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100"
                }`}
                aria-current={n === currentPage ? "page" : undefined}
                aria-label={n === currentPage ? `Página ${n}` : `Ir a página ${n}`}
              >
                {n}
              </Link>
            </li>
          )
        )}
        <li>
          <Link
            href={buildUrl(searchParams, currentPage + 1)}
            className={`inline-flex items-center justify-center min-h-touch min-w-[2.75rem] px-2 rounded-xl text-sm font-medium transition-colors duration-200 active:scale-95 ${
              currentPage >= totalPages
                ? "pointer-events-none text-stone-300 dark:text-stone-600"
                : "text-ink-secondary hover:bg-stone-100 hover:text-ink dark:text-stone-400 dark:hover:bg-stone-800 dark:hover:text-stone-100"
            }`}
            aria-disabled={currentPage >= totalPages}
            aria-label="Página siguiente"
          >
            →
          </Link>
        </li>
      </ul>
    </nav>
  );
}
