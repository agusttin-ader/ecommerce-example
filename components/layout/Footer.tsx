import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white">
      <div className="h-1 w-full bg-brand-500" aria-hidden />
      <div className="container-narrow py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display font-bold text-lg text-white">Ecommerce</p>
            <p className="text-stone-400 text-sm mt-1">Diseño innovador · Listo para tu rubro</p>
          </div>
          <nav className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Navegar</span>
            <Link href="/" className="text-stone-300 hover:text-white transition-colors text-sm">
              Inicio
            </Link>
            <Link href="/productos" className="text-stone-300 hover:text-white transition-colors text-sm">
              Productos
            </Link>
            <Link href="/carrito" className="text-stone-300 hover:text-white transition-colors text-sm">
              Carrito
            </Link>
            <Link href="/checkout" className="text-stone-300 hover:text-white transition-colors text-sm">
              Checkout
            </Link>
          </nav>
          <div className="lg:col-span-2 flex flex-col justify-end">
            <p className="text-stone-500 text-xs max-w-sm">
              Cuando definas el rubro, reemplazá contenido e imágenes. Misma estructura, tu marca.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
