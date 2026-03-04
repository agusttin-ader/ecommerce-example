import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-white dark:bg-stone-950 dark:border-t dark:border-stone-800 safe-area-inset-bottom">
      <div className="h-0.5 w-full bg-gradient-to-r from-brand-600 to-brand-800 min-h-[1px] dark:from-brand-500 dark:to-brand-700" aria-hidden />
      <div className="container-narrow py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8">
          <div className="xs:col-span-2 lg:col-span-1">
            <p className="font-display font-semibold text-base sm:text-lg text-white tracking-tight">Tienda</p>
            <p className="text-stone-400 dark:text-stone-500 text-sm mt-1">Tu tienda online</p>
          </div>
          <nav className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400">Navegar</span>
            <Link href="/" className="text-stone-300 hover:text-white dark:text-stone-400 dark:hover:text-stone-100 transition-colors text-sm py-1.5 min-h-touch flex items-center">
              Inicio
            </Link>
            <Link href="/productos" className="text-stone-300 hover:text-white dark:text-stone-400 dark:hover:text-stone-100 transition-colors text-sm py-1.5 min-h-touch flex items-center">
              Productos
            </Link>
            <Link href="/carrito" className="text-stone-300 hover:text-white dark:text-stone-400 dark:hover:text-stone-100 transition-colors text-sm py-1.5 min-h-touch flex items-center">
              Carrito
            </Link>
            <Link href="/checkout" className="text-stone-300 hover:text-white dark:text-stone-400 dark:hover:text-stone-100 transition-colors text-sm py-1.5 min-h-touch flex items-center">
              Checkout
            </Link>
          </nav>
          <div className="xs:col-span-2 lg:col-span-2 flex flex-col justify-end gap-4">
            <nav className="flex flex-wrap gap-x-4 gap-y-1">
              <Link href="/terminos" className="text-stone-400 hover:text-white dark:text-stone-500 dark:hover:text-stone-200 transition-colors text-xs sm:text-sm py-1 min-h-touch flex items-center">
                Términos
              </Link>
              <Link href="/privacidad" className="text-stone-400 hover:text-white dark:text-stone-500 dark:hover:text-stone-200 transition-colors text-xs sm:text-sm py-1 min-h-touch flex items-center">
                Privacidad
              </Link>
            </nav>
            <p className="text-stone-500 dark:text-stone-500 text-xs max-w-sm leading-relaxed">
              © 2025. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
