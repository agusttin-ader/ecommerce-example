# Ecommerce Example

Proyecto de tienda online por etapas.

## Etapas

| Etapa | Contenido | Estado |
|-------|-----------|--------|
| 1 | Estructura (Next.js, rutas, tipos, componentes base) | ✅ |
| 2 | Diseño (tipografía, paleta, componentes UI) | ✅ |
| 3 | Funcionalidades (búsqueda, filtro por categoría, orden, menú móvil) | ✅ |
| 4 | Carrito de compras (contexto, localStorage, resumen, checkout) | ✅ |
| 5 | Checkout y pago simulado (estructura lista para Mercado Pago) | ✅ |
| 6 | Documentación: pasos para ecommerce 100% funcional | ✅ |

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Si ves "Internal Server Error" en desarrollo

A veces la caché de Next (`.next`) se corrompe (cierre brusco, varios procesos, etc.). Solución:

```bash
npm run dev:clean
```

Eso borra `.next` y arranca el servidor de nuevo. No afecta tu código ni a producción.

### Producción

En producción (Vercel, Netlify, etc.) **no se usa** la carpeta `.next` de tu máquina: la plataforma hace un `next build` en un entorno limpio en cada deploy. Ese error de caché es solo posible en desarrollo local. Para estar seguros, desplegá siempre desde el repo (build from source), no subiendo una carpeta `.next` pregenerada.

## Estructura (Etapa 1)

- `app/` — Rutas y páginas (App Router)
- `components/` — Layout (Header, Footer) y producto (ProductCard, ProductGrid)
- `lib/` — Tipos (`types.ts`), datos de ejemplo (`data.ts`)
- `public/` — Assets estáticos (imágenes cuando se definan)

Rutas: `/`, `/productos`, `/productos/[slug]`, `/carrito`, `/checkout`, `/checkout/gracias`.

**Etapa 5 y 6:** El checkout tiene un flujo simulado (botón “Simular pago”); no se usan APIs de pago. Para conectar Mercado Pago o tarjetas y dejar el ecommerce 100% funcional, ver **`ETAPA-6-PASOS-FINALES.md`**.
