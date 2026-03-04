import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones | Ecommerce Example",
  description: "Términos y condiciones de uso de la tienda.",
};

export default function TerminosPage() {
  return (
    <div className="container-narrow py-12 sm:py-16 min-w-0 max-w-3xl">
      <h1 className="page-heading">Términos y condiciones</h1>
      <p className="page-subheading mt-1">
        Página de ejemplo. Reemplazá por tu propio contenido legal.
      </p>
      <div className="mt-8 prose prose-stone max-w-none text-ink-secondary text-sm sm:text-base">
        <p>
          Aquí irían los términos y condiciones de tu tienda: uso del sitio, compras, devoluciones,
          propiedad intelectual, etc. Consultá con un abogado para redactar el texto definitivo.
        </p>
      </div>
    </div>
  );
}
