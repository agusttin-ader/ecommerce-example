# Auditoría de optimización y calidad

## Modo oscuro

- **Activación:** Toggle en header (desktop y móvil). Preferencia guardada en `localStorage` (`theme`).
- **Sin flash:** Script `beforeInteractive` en layout aplica la clase `dark` en `<html>` antes del primer paint, según `localStorage` o `prefers-color-scheme`.
- **Contraste:**
  - Fondo: `stone-950` (#0c0c0c). Texto principal: `stone-100` (#fafaf9). Ratio > 12:1 (WCAG AAA).
  - Texto secundario: `stone-400`. Bordes: `stone-700`/`stone-800`.
  - Brand en oscuro: `brand-400`/`brand-500` sobre fondos oscuros para contraste suficiente.
- **Componentes:** Todos los bloques con contenido (cards, inputs, botones, nav, footer, hero, listados, carrito, checkout, legales) tienen variantes `dark:`.

---

## Optimización

### Carga y rendimiento

- **Imágenes:** Uso de `<img>` con `loading="lazy"` (salvo primera del hero con `loading="eager"` y `fetchPriority="high"`). Sin `next/image` en productos para evitar errores con archivos locales.
- **Fuentes:** `next/font` (Syne, DM Sans) con `display: swap` para evitar FOIT.
- **Hero carousel:** Pausa al cambiar de pestaña (Page Visibility API). Intervalo más largo con `prefers-reduced-motion: reduce`. Transición por opacidad (CSS).
- **Sin dependencias pesadas:** Sin librerías de carousel ni de estado global; contexto mínimo (Cart, Theme).

### Core Web Vitals

- **LCP:** Hero con imagen prioritaria; fuentes y estilos críticos en layout.
- **CLS:** Tamaños de imagen definidos (aspect-ratio, object-cover); sin saltos de contenido.
- **INP/FID:** Debounce en búsqueda (ProductFilters); handlers sencillos.

### Accesibilidad

- **Contraste:** Cumplimiento en modo claro y oscuro (texto y fondos).
- **Focus:** `focus-visible:ring-2` en controles; skip link "Saltar al contenido".
- **Reduced motion:** `prefers-reduced-motion` en globals; carousel más lento cuando está activo.
- **Semántica:** `<main>`, `<nav>`, headings en orden; labels en formularios; `aria-label` donde hace falta.

### SEO y meta

- **Metadata:** `generateMetadata` en producto; títulos y descripciones en layout y páginas clave.
- **URLs:** Paginación y filtros por query string; URLs estables para compartir.

### Mantenimiento

- **Tipado:** TypeScript en todo el proyecto.
- **Estilos:** Tailwind con clases reutilizables; variables CSS para tema.
- **Estructura:** Componentes por dominio (layout, product, cart, checkout, home, ui).

---

## Resumen

| Área           | Estado |
|----------------|--------|
| Modo oscuro    | Implementado con contraste correcto |
| Imágenes       | Lazy + prioridad en hero |
| Fuentes        | Optimizadas con next/font |
| Carousel       | Pausa en background, reduced motion |
| Contraste      | Revisado claro/oscuro |
| A11y           | Focus, skip link, reduced motion |
| Performance    | Sin bundles pesados, script theme beforeInteractive |

Si sumás analytics o más rutas, conviene revisar de nuevo LCP y carga de JS en esas páginas.
