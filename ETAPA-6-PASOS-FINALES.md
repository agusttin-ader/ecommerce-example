# Etapa 6 — Pasos para tener el ecommerce 100% funcional

Este documento resume todo lo que falta para que la tienda sea real: pagos, órdenes, envíos y publicación. **No se modifica código aquí**; es solo guía de pasos.

---

## 1. Definir el rubro y el contenido

- **Productos**: reemplazar los datos de ejemplo en `lib/data.ts` por tus productos (nombre, descripción, precio, categoría).
- **Imágenes**: subir imágenes a `public/` o a un CDN y poner las URLs en cada producto (`image` o `images[]`).
- **Categorías**: ajustar `categories` en `lib/data.ts` a tu catálogo.
- **Textos legales**: preparar página de Términos y condiciones, Política de privacidad y (si aplica) Política de envíos y devoluciones.

---

## 2. Pasarela de pagos (Mercado Pago / tarjetas)

### Opción A: Mercado Pago

1. **Cuenta**: [Crear cuenta en Mercado Pago](https://www.mercadopago.com.ar/) (modo vendedor).
2. **Credenciales**: en el panel, ir a [Tus integraciones](https://www.mercadopago.com.ar/developers/panel) y obtener:
   - **Access Token** (producción o prueba).
   - Para Checkout Pro también se usa el **Public Key** en el front.
3. **Variables de entorno**: nunca subas las claves al repo. Usar `.env.local`:
   ```env
   NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY=pk_test_...
   MERCADOPAGO_ACCESS_TOKEN=APP_USR_...
   ```
4. **Backend**: Mercado Pago requiere un endpoint en tu servidor que cree la “preferencia” (preferencia de pago) con los ítems y el monto. En Next.js podés usar una **API Route** en `app/api/mercado-pago/crear-preferencia/route.ts` que:
   - Reciba el carrito (ids y cantidades) o el total.
   - Llame al SDK de Mercado Pago con tu `ACCESS_TOKEN` para crear la preferencia.
   - Devuelva el `id` de la preferencia (o el link de pago) al front.
5. **Frontend**: en la página de checkout, en lugar del botón “Simular pago”:
   - Llamar a tu API para crear la preferencia.
   - Redirigir al usuario a la URL de pago de Mercado Pago (Checkout Pro) o incrustar el checkout (Checkout Brick).
6. **Después del pago**: configurar **URLs de retorno** en la preferencia (éxito y fallo), por ejemplo:
   - Éxito: `https://tudominio.com/checkout/gracias?payment_id=...`
   - Fallo: `https://tudominio.com/checkout/error`
7. **Webhooks** (recomendado): en el panel de Mercado Pago, configurar una URL de notificación. Crear otra API Route (ej. `app/api/webhooks/mercado-pago/route.ts`) que reciba el POST, verifique que el pago está aprobado y actualice tu base de datos (marcar orden como pagada). No confiar solo en la redirección del usuario.

Documentación oficial: [Mercado Pago Developers](https://www.mercadopago.com.ar/developers).

### Opción B: Otra pasarela (Stripe, etc.)

- Misma idea: **credenciales en variables de entorno**, **API Route en el backend** que cree el pago/intent, **frontend** que redirija o use el formulario de la pasarela, y **webhook** para confirmar el pago y actualizar órdenes.

---

## 3. Guardar órdenes (base de datos)

Hoy el carrito solo vive en el navegador (localStorage). Para un ecommerce real necesitás:

- **Base de datos**: por ejemplo PostgreSQL, MySQL o un servicio como Supabase, PlanetScale o MongoDB Atlas.
- **Modelo de datos**: tabla (o colección) de **órdenes** con: id, usuario/email, ítems (JSON o tabla relacionada), total, moneda, estado (pendiente, pagado, enviado, cancelado), id de pago externo (Mercado Pago, Stripe, etc.), fecha.
- **API Routes en Next.js**:
  - Crear orden cuando el usuario confirma el checkout (antes de redirigir a pagar).
  - Actualizar orden cuando el webhook confirma el pago.
- **Opcional**: cuentas de usuario (login/registro) para ver “Mis pedidos”. Sin usuarios, podés identificar órdenes por email + número de orden.

---

## 4. Envíos (opcional pero habitual)

- Definir si ofrecés envío a domicilio, puntos de retiro o solo digital.
- En el checkout: formulario o selector de dirección / CP y cálculo de costo de envío (API de correo o reglas propias).
- Guardar en la orden: dirección, método de envío y monto.
- Comunicar al cliente el estado (ej. “En camino”) por email o en “Mi cuenta”.

---

## 5. Subir el sitio (hosting y dominio)

- **Hosting**: desplegar el proyecto en [Vercel](https://vercel.com) (recomendado para Next.js), Netlify, o un VPS.
- **Dominio**: comprar dominio y apuntarlo al hosting (DNS).
- **HTTPS**: el hosting suele darlo automático. Imprescindible para pagos.
- **Variables de entorno**: configurar en el panel del hosting (`NEXT_PUBLIC_*` y secretos como `MERCADOPAGO_ACCESS_TOKEN`).

---

## 6. Resumen rápido

| Qué | Dónde / Cómo |
|-----|----------------|
| Productos e imágenes | `lib/data.ts` + `public/` o CDN |
| Pagos (Mercado Pago) | Cuenta MP → credenciales → API Route crear preferencia → front redirige → webhook confirma |
| Tarjetas | Incluidas en Mercado Pago Checkout Pro; o integrar Stripe/otra pasarela con el mismo patrón |
| Órdenes | Base de datos + API Routes para crear y actualizar con el resultado del pago |
| Envíos | Formulario checkout + lógica de costos + guardar en la orden |
| Publicar | Vercel/hosting + dominio + env vars |

Con esto tenés el mapa para llevar el ecommerce de “demo” a “100% funcional” sin romper lo que ya está construido en las etapas 1 a 5.
