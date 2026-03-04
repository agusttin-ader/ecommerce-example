/**
 * Tipos base del ecommerce.
 * Etapa 1: estructura. Se ampliarán en etapas posteriores (carrito, pagos).
 */

/** Crédito de imagen (ej. Unsplash). Opcional; completar cuando la foto lo requiera. */
export interface ImageCredit {
  /** Nombre del autor (ej. "Jane Doe") */
  name: string;
  /** URL del perfil del autor (ej. https://unsplash.com/@usuario) */
  url: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image?: string;
  /** Crédito para la imagen principal (ej. Unsplash). Mostrado solo si está definido. */
  imageCredit?: ImageCredit;
  images?: string[];
  categoryId: string;
  stock?: number;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description?: string;
  image?: string;
}

/** Para el carrito (Etapa 4) */
export interface CartItem {
  product: Product;
  quantity: number;
}

/** Para la pasarela de pagos (Etapa 5) */
export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  currency: string;
  status: "pending" | "paid" | "failed" | "cancelled";
}
