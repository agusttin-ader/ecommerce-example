import type { Product, Category } from "./types";

/**
 * Datos de ejemplo para desarrollo.
 *
 * Imágenes:
 * - Local: poné archivos en public/images/products/ y usá image: "/images/products/NOMBRE.jpg"
 * - Ejemplo: prod-1.jpg → image: "/images/products/prod-1.jpg"
 * - Si no ponés image (o dejás undefined), se muestra el placeholder gris.
 * - Supabase: más adelante podés usar la URL del bucket en image (next.config ya permite Supabase).
 *
 * Crédito Unsplash (opcional): si la imagen viene de Unsplash y lo pide la licencia, agregá
 * imageCredit: { name: "Nombre del fotógrafo", url: "https://unsplash.com/@usuario" }
 * en ese producto. Se muestra "Foto [nombre] en Unsplash" bajo la imagen.
 */

export const categories: Category[] = [
  { id: "cat-1", slug: "indumentaria", name: "Indumentaria", description: "Ropa y prendas" },
  { id: "cat-2", slug: "accesorios", name: "Accesorios", description: "Complementos y accesorios" },
];

export const products: Product[] = [
  { id: "prod-3", slug: "zapatilla-urbana", name: "Zapatilla urbana", description: "Zapatilla liviana para uso diario. Suela flexible y diseño neutro.", price: 799, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-3.jpg", imageCredit: { name: "Imani Bahati", url: "https://unsplash.com/@imani_bht" } },
  { id: "prod-15", slug: "lentes-sol-clasico", name: "Lentes de sol clásico", description: "Lentes de sol con montura resistente. Protección UV.", price: 969, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-15.jpg", imageCredit: { name: "Giorgio Trovato", url: "https://unsplash.com/@giorgiotrovato" } },
  { id: "prod-19", slug: "reloj-cuero", name: "Reloj con correa de cuero", description: "Reloj analógico con correa de cuero. Estilo casual.", price: 829, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-19.jpg", imageCredit: { name: "Daniel Korpai", url: "https://unsplash.com/@danielkorpai" } },
  { id: "prod-24", slug: "auriculares-inalambricos", name: "Auriculares inalámbricos", description: "Auriculares con cancelación de ruido. Carga inalámbrica y gran autonomía.", price: 1899, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-24.jpg", imageCredit: { name: "Daniel Romero", url: "https://unsplash.com/@rmrdnl" } },
  { id: "prod-25", slug: "zapatilla-deportiva", name: "Zapatilla deportiva", description: "Zapatilla para running o uso deportivo. Suela de goma y diseño ergonómico.", price: 1299, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-25.jpg", imageCredit: { name: "Ryan Waring", url: "https://unsplash.com/@ryanwaring" } },
  { id: "prod-26", slug: "reloj-clasico", name: "Reloj clásico", description: "Reloj de vestir, esfera blanca y correa blanca. Estilo minimalista.", price: 899, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-26.jpg", imageCredit: { name: "Rachit Tank", url: "https://unsplash.com/@rachitank" } },
  { id: "prod-27", slug: "perfume-fragancia", name: "Perfume", description: "Fragancia de larga duración. Presentación en frasco de diseño.", price: 2499, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-27.jpg", imageCredit: { name: "Laura Chouette", url: "https://unsplash.com/@laurachouette" } },
  { id: "prod-28", slug: "zapatilla-running", name: "Zapatilla running", description: "Zapatilla deportiva liviana. Ideal para correr o entrenar.", price: 1599, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-28.jpg", imageCredit: { name: "Irene Kredenets", url: "https://unsplash.com/@ikredenets" } },
  { id: "prod-29", slug: "zapatilla-plimsoll", name: "Zapatilla plimsoll", description: "Zapatilla de lona, estilo casual. Cómoda para el día a día.", price: 849, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-29.jpg", imageCredit: { name: "Paul Gaudriault", url: "https://unsplash.com/@pl_gt" } },
  { id: "prod-30", slug: "camara-instantanea", name: "Cámara instantánea", description: "Cámara de fotos instantáneas. Imprime recuerdos al momento.", price: 12999, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-30.jpg", imageCredit: { name: "Lokesh Paduchuri", url: "https://unsplash.com/@lokeshpaduchuri" } },
  { id: "prod-31", slug: "perfume-spray", name: "Perfume spray", description: "Fragancia en spray. Aplicación práctica y duradera.", price: 2199, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-31.jpg", imageCredit: { name: "Fernando Andrade", url: "https://unsplash.com/@thisisnando" } },
  { id: "prod-32", slug: "reloj-cronografo", name: "Reloj cronógrafo", description: "Reloj plateado con correa de cuero marrón. Función cronógrafo.", price: 1499, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-32.jpg", imageCredit: { name: "Pat Taylor", url: "https://unsplash.com/@ptaylor_" } },
  { id: "prod-33", slug: "botella-reutilizable", name: "Botella reutilizable", description: "Botella para llevar agua o bebidas. Diseño minimalista.", price: 599, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-33.jpg", imageCredit: { name: "Valeriia Miller", url: "https://unsplash.com/@valeriiamiller" } },
  { id: "prod-34", slug: "fragancia-femenina", name: "Fragancia femenina", description: "Perfume de larga duración. Notas frescas y florales.", price: 2699, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-34.jpg", imageCredit: { name: "Karly Jones", url: "https://unsplash.com/@earthtokarly" } },
  { id: "prod-35", slug: "lente-camara", name: "Lente de cámara", description: "Objetivo para cámara réflex o sin espejo. Alta nitidez.", price: 45999, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-35.jpg", imageCredit: { name: "Mudit Jain", url: "https://unsplash.com/@jain_mudit" } },
  { id: "prod-36", slug: "pack-calcetines", name: "Pack de calcetines", description: "Pack de cuatro pares de calcetines. Algodón y buen calce.", price: 699, currency: "ARS", categoryId: "cat-1", image: "/images/products/prod-36.jpg", imageCredit: { name: "NIKHIL", url: "https://unsplash.com/@vinikhill" } },
  { id: "prod-37", slug: "taza-cafe", name: "Taza de café", description: "Taza ideal para café, té o infusiones. Diseño clásico.", price: 449, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-37.jpg", imageCredit: { name: "Julian Rösner", url: "https://unsplash.com/@kipfarl" } },
  { id: "prod-38", slug: "botella-vino", name: "Botella de vino", description: "Vino de calidad. Ideal para regalo o ocasiones especiales.", price: 3499, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-38.jpg", imageCredit: { name: "Mockup Free", url: "https://unsplash.com/@mockupfreenet" } },
  { id: "prod-39", slug: "licor", name: "Licor", description: "Licor premium. Presentación elegante para regalo.", price: 4299, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-39.jpg", imageCredit: { name: "Masood Aslami", url: "https://unsplash.com/@masoodaslami" } },
  { id: "prod-40", slug: "colonia", name: "Colonia", description: "Colonia de larga duración. Fragancia fresca y versátil.", price: 1999, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-40.jpg", imageCredit: { name: "Masood Aslami", url: "https://unsplash.com/@masoodaslami" } },
  { id: "prod-41", slug: "peluche", name: "Peluche", description: "Juguete de peluche suave. Ideal para regalo o decoración.", price: 899, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-41.jpg", imageCredit: { name: "xu yangxin", url: "https://unsplash.com/@usaguy" } },
  { id: "prod-42", slug: "labial", name: "Labial", description: "Lápiz labial de larga duración. Color intenso y acabado mate.", price: 749, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-42.jpg", imageCredit: { name: "Mehmet Ali Turan", url: "https://unsplash.com/@mehmetalituran" } },
  { id: "prod-43", slug: "reloj-pulsera-blanco", name: "Reloj de pulsera blanco", description: "Reloj con correa de metal. Esfera blanca y diseño elegante.", price: 1199, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-43.jpg", imageCredit: { name: "Mehmet Ali Turan", url: "https://unsplash.com/@mehmetalituran" } },
  { id: "prod-44", slug: "reloj-blanco-metal", name: "Reloj blanco correa metal", description: "Reloj con brazalete de metal y esfera blanca. Estilo minimalista.", price: 1099, currency: "ARS", categoryId: "cat-2", image: "/images/products/prod-44.jpg", imageCredit: { name: "Mehmet Ali Turan", url: "https://unsplash.com/@mehmetalituran" } },
];
