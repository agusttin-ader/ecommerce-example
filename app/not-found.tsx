import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-narrow py-24 text-center">
      <h1 className="font-display text-display-lg text-ink">Página no encontrada</h1>
      <p className="page-subheading mt-2">La ruta que buscás no existe.</p>
      <Link href="/" className="btn-primary mt-8 inline-block">
        Volver al inicio
      </Link>
    </div>
  );
}
