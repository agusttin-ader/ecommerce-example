# Tienda — Ecommerce

Tienda online moderna y responsive. Catálogo, carrito, checkout y modo oscuro.

---

## Stack

| Tecnología | Uso |
|------------|-----|
| **Next.js 15** | App Router, React Server Components |
| **React 19** | UI |
| **TypeScript** | Tipado |
| **Tailwind CSS** | Estilos |

---

## Cómo correr el proyecto

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

```bash
# Build para producción
npm run build

# Servir build
npm start
```

### Scripts útiles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run dev:clean` | Borra `.next` y arranca de nuevo (por si algo falla) |
| `npm run build` | Build de producción |
| `npm run start` | Sirve el build |
| `npm run lint` | Ejecuta ESLint |

---

## Estructura del repo

```
├── app/                 # Rutas y páginas (App Router)
├── components/          # Componentes React (layout, product, cart, checkout, home, ui)
├── context/             # CartContext, ThemeContext
├── lib/                 # Datos, tipos, lógica de productos y paginación
├── public/              # Assets estáticos (p. ej. images/products/)
└── tailwind.config.ts   # Configuración de Tailwind
```

---

## Imágenes de productos

Las imágenes se sirven desde `public/images/products/`.  
Nombres esperados: `prod-1.jpg`, `prod-2.jpg`, … (según `lib/data.ts`).

---

## Licencia

Proyecto privado.
