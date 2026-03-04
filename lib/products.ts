import type { Product } from "./types";
import { products, categories } from "./data";

export { categories };

export type SortOption = "precio-asc" | "precio-desc" | "nombre-asc" | "nombre-desc";

export interface ProductFilters {
  q?: string;
  categoria?: string;
  orden?: SortOption;
}

export function getFilteredAndSortedProducts(filters: ProductFilters): Product[] {
  let result = [...products];

  if (filters.q?.trim()) {
    const term = filters.q.trim().toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term)
    );
  }

  if (filters.categoria) {
    const category = categories.find((c) => c.slug === filters.categoria);
    if (category) {
      result = result.filter((p) => p.categoryId === category.id);
    }
  }

  const orden = filters.orden ?? "nombre-asc";
  switch (orden) {
    case "precio-asc":
      result.sort((a, b) => a.price - b.price);
      break;
    case "precio-desc":
      result.sort((a, b) => b.price - a.price);
      break;
    case "nombre-asc":
      result.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "nombre-desc":
      result.sort((a, b) => b.name.localeCompare(a.name));
      break;
    default:
      result.sort((a, b) => a.name.localeCompare(b.name));
  }

  return result;
}

const DEFAULT_PER_PAGE = 12;
const PER_PAGE_OPTIONS = [8, 12, 24] as const;

export type PerPage = (typeof PER_PAGE_OPTIONS)[number];

export function getPaginationOptions() {
  return { defaultPerPage: DEFAULT_PER_PAGE, perPageOptions: [...PER_PAGE_OPTIONS] };
}

export function getPaginatedProducts(
  filters: ProductFilters,
  page: number,
  perPage: number = DEFAULT_PER_PAGE
): { items: Product[]; totalCount: number; totalPages: number } {
  const all = getFilteredAndSortedProducts(filters);
  const totalCount = all.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / perPage));
  const safePage = Math.max(1, Math.min(page, totalPages));
  const start = (safePage - 1) * perPage;
  const items = all.slice(start, start + perPage);
  return { items, totalCount, totalPages };
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategorySlug(categorySlug: string): Product[] {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return products.filter((p) => p.categoryId === category.id);
}
