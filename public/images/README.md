# Imágenes del ecommerce

## Uso actual (local)

- **Productos:** poné las fotos en `products/` con el nombre que referenciás en `lib/data.ts`.
  - Ejemplo: `prod-1.jpg`, `prod-2.jpg` → en data usá `image: "/images/products/prod-1.jpg"`.
- Las rutas son desde la raíz del sitio: `/images/products/tu-archivo.jpg`.

## Pasar a Supabase Storage más adelante

1. Creá un bucket en Supabase (ej. `products`) y subí las imágenes.
2. Las URLs quedarán tipo: `https://TU_PROYECTO.supabase.co/storage/v1/object/public/products/archivo.jpg`
3. En `lib/data.ts` (o en tu API/DB) usá esa URL en `product.image`.
4. En `next.config.ts` ya está permitido el dominio de Supabase para `next/image`; si usás otro subdominio, agregalo en `images.remotePatterns`.

Mientras tanto, con archivos en `public/images` no necesitás configurar nada más.
