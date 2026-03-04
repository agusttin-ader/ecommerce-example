import Link from "next/link";

export default function GraciasPage() {
  return (
    <div className="container-narrow py-16 sm:py-24 text-center max-w-xl mx-auto">
      <h1 className="font-display text-display-md text-ink">
        Gracias por tu compra
      </h1>
      <p className="text-ink-secondary mt-4">
        Fue un pago simulado. En un ecommerce real acá podrías mostrar el número de orden y un mail de confirmación.
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link href="/productos" className="btn-primary">
          Seguir comprando
        </Link>
        <Link href="/" className="btn-secondary">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
