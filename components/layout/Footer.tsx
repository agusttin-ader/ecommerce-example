import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white safe-area-inset-bottom">
      <div className="h-1 w-full bg-brand-500 min-h-[2px]" aria-hidden />
      <div className="container-narrow py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          <div className="xs:col-span-2 lg:col-span-1">
            <p className="font-display font-bold text-base sm:text-lg text-white">Ecommerce</p>
            <p className="text-stone-400 text-sm mt-1">Diseño innovador · Listo para tu rubro</p>
          </div>
          <nav className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Navegar</span>
            <Link href="/" className="text-stone-300 hover:text-white transition-colors text-sm py-1.5 min-h-touch flex items-center">
              Inicio
            </Link>
            <Link href="/productos" className="text-stone-300 hover:text-white transition-colors text-sm py-1.5 min-h-touch flex items-center">
              Productos
            </Link>
            <Link href="/carrito" className="text-stone-300 hover:text-white transition-colors text-sm py-1.5 min-h-touch flex items-center">
              Carrito
            </Link>
            <Link href="/checkout" className="text-stone-300 hover:text-white transition-colors text-sm py-1.5 min-h-touch flex items-center">
              Checkout
            </Link>
          </nav>
          <div className="xs:col-span-2 lg:col-span-2 flex flex-col justify-end gap-4">
            <nav className="flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/terminos" className="text-stone-400 hover:text-white transition-colors text-xs sm:text-sm py-1 min-h-touch flex items-center">
                Términos
              </Link>
              <Link href="/privacidad" className="text-stone-400 hover:text-white transition-colors text-xs sm:text-sm py-1 min-h-touch flex items-center">
                Privacidad
              </Link>
            </nav>
            <p className="text-stone-500 text-xs max-w-sm leading-relaxed">
              Cuando definas el rubro, reemplazá contenido e imágenes. Misma estructura, tu marca.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
