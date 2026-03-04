import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad | Tienda",
  description: "Política de privacidad y tratamiento de datos personales.",
};

export default function PrivacidadPage() {
  return (
    <div className="container-narrow py-12 sm:py-16 min-w-0 max-w-3xl">
      <h1 className="page-heading">Política de privacidad</h1>
      <p className="page-subheading mt-1">
        Cómo cuidamos tus datos
      </p>
      <div className="mt-8 prose prose-stone max-w-none text-ink-secondary dark:text-stone-400 text-sm sm:text-base">
        <p>
          Respetamos tu privacidad. Los datos que nos brindás se usan solo para procesar tu pedido
          y contactarte. No compartimos tu información con terceros para fines comerciales.
          Para consultas sobre tus datos personales podés escribirnos.
        </p>
      </div>
    </div>
  );
}
