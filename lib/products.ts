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
