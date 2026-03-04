import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidad | Ecommerce Example",
  description: "Política de privacidad y tratamiento de datos personales.",
};

export default function PrivacidadPage() {
  return (
    <div className="container-narrow py-12 sm:py-16 min-w-0 max-w-3xl">
      <h1 className="page-heading">Política de privacidad</h1>
      <p className="page-subheading mt-1">
        Página de ejemplo. Reemplazá por tu propia política de privacidad.
      </p>
      <div className="mt-8 prose prose-stone max-w-none text-ink-secondary text-sm sm:text-base">
        <p>
          Aquí iría la política de privacidad: qué datos recopilás, cómo los usás, cookies,
          derechos del usuario, contacto del responsable, etc. Necesaria para cumplir con RGPD y
          normativas locales.
        </p>
      </div>
    </div>
  );
}
