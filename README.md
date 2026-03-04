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

## Estructura (Etapa 1)

- `app/` — Rutas y páginas (App Router)
- `components/` — Layout (Header, Footer) y producto (ProductCard, ProductGrid)
- `lib/` — Tipos (`types.ts`), datos de ejemplo (`data.ts`)
- `public/` — Assets estáticos (imágenes cuando se definan)

Rutas: `/`, `/productos`, `/productos/[slug]`, `/carrito`, `/checkout`, `/checkout/gracias`.

**Etapa 5 y 6:** El checkout tiene un flujo simulado (botón “Simular pago”); no se usan APIs de pago. Para conectar Mercado Pago o tarjetas y dejar el ecommerce 100% funcional, ver **`ETAPA-6-PASOS-FINALES.md`**.
