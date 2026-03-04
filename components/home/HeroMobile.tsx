import Link from "next/link";

export function HeroMobile() {
  return (
    <section
      className="relative overflow-hidden bg-surface-muted bg-hero-pattern-premium dark:bg-stone-950 dark:bg-hero-pattern-dark w-full"
      aria-label="Bienvenidos"
    >
      <div className="container-narrow py-14 sm:py-16">
        <h1 className="font-display text-display-xl text-ink animate-fade-in">
          Bienvenidos
        </h1>
        <p
          className="mt-3 sm:mt-4 max-w-xl text-base sm:text-lg text-ink-secondary dark:text-stone-400 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Encontrá lo que necesitás. Envíos a todo el país.
        </p>
        <div
          className="mt-6 sm:mt-8 flex flex-col xs:flex-row flex-wrap gap-3 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Link
            href="/productos"
            className="btn-primary w-full xs:w-auto text-center"
          >
            Ver productos
          </Link>
          <Link
            href="/carrito"
            className="btn-secondary w-full xs:w-auto text-center"
          >
            Ir al carrito
          </Link>
        </div>
      </div>
    </section>
  );
}
