import type { Product, Category } from "./types";

/**
 * Datos de ejemplo para desarrollo.
 * Las imágenes son placeholders; reemplazar por productos reales.
 */

export const categories: Category[] = [
  { id: "cat-1", slug: "categoria-1", name: "Categoría 1", description: "Descripción categoría 1" },
  { id: "cat-2", slug: "categoria-2", name: "Categoría 2", description: "Descripción categoría 2" },
];

export const products: Product[] = [
  {
    id: "prod-1",
    slug: "producto-ejemplo-1",
    name: "Producto ejemplo 1",
    description: "Descripción del producto de ejemplo. Aquí irá el detalle del producto.",
    price: 999,
    currency: "ARS",
    categoryId: "cat-1",
  },
  {
    id: "prod-2",
    slug: "producto-ejemplo-2",
    name: "Producto ejemplo 2",
    description: "Descripción del segundo producto.",
    price: 1499,
    currency: "ARS",
    categoryId: "cat-1",
  },
  {
    id: "prod-3",
    slug: "producto-ejemplo-3",
    name: "Producto ejemplo 3",
    description: "Tercer producto de ejemplo.",
    price: 799,
    currency: "ARS",
    categoryId: "cat-2",
  },
];
