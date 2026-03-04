import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-narrow py-16 sm:py-24 text-center min-w-0">
      <h1 className="font-display text-display-lg text-ink">Página no encontrada</h1>
      <p className="page-subheading mt-2">La ruta que buscás no existe.</p>
      <Link href="/" className="btn-primary mt-6 sm:mt-8 inline-block w-full sm:w-auto">
        Volver al inicio
      </Link>
    </div>
  );
}
