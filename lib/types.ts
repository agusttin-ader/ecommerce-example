/**
 * Tipos base del ecommerce.
 * Etapa 1: estructura. Se ampliarán en etapas posteriores (carrito, pagos).
 */

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image?: string;
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
