import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y condiciones | Tienda",
  description: "Términos y condiciones de uso de la tienda.",
};

export default function TerminosPage() {
  return (
    <div className="container-narrow py-12 sm:py-16 min-w-0 max-w-3xl">
      <h1 className="page-heading">Términos y condiciones</h1>
      <p className="page-subheading mt-1">
        Uso del sitio y compras
      </p>
      <div className="mt-8 prose prose-stone max-w-none text-ink-secondary dark:text-stone-400 text-sm sm:text-base">
        <p>
          Los términos y condiciones regulan el uso de este sitio y las compras realizadas.
          Para consultas o reclamos podés contactarnos por los canales indicados en la web.
        </p>
      </div>
    </div>
  );
}
