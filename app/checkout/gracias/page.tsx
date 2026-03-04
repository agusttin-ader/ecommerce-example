import Link from "next/link";

export default function GraciasPage() {
  return (
    <div className="container-narrow py-12 sm:py-20 lg:py-24 text-center max-w-xl mx-auto min-w-0">
      <h1 className="font-display text-display-md text-ink dark:text-stone-100">
        Gracias por tu compra
      </h1>
      <p className="text-ink-secondary dark:text-stone-400 mt-3 sm:mt-4 text-sm sm:text-base">
        Recibirás un email de confirmación con el detalle de tu pedido.
      </p>
      <div className="mt-8 sm:mt-10 flex flex-col xs:flex-row flex-wrap justify-center gap-3">
        <Link href="/productos" className="btn-primary w-full xs:w-auto">
          Seguir comprando
        </Link>
        <Link href="/" className="btn-secondary w-full xs:w-auto">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
