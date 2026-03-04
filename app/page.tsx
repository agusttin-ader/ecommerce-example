import Link from "next/link";
import { ProductGrid } from "@/components/product/ProductGrid";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { HeroMobile } from "@/components/home/HeroMobile";
import { products } from "@/lib/data";

const FEATURED_COUNT = 5;
const featuredProducts = products.slice(0, FEATURED_COUNT);

export default function HomePage() {
  return (
    <>
      {/* Hero móvil: estático, sin carousel */}
      <div className="md:hidden w-full">
        <HeroMobile />
      </div>
      {/* Hero desktop: carousel 100% width, 5 productos */}
      <div className="hidden md:block w-full">
        <HeroCarousel products={featuredProducts} />
      </div>

      <section className="container-narrow py-10 sm:py-14 lg:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8 animate-slide-up">
          <div className="min-w-0">
            <h2 className="display-heading text-display-md">Productos</h2>
            <p className="page-subheading mt-1">Nuestros productos</p>
          </div>
          <Link
            href="/productos"
            className="text-sm font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 transition-colors shrink-0 inline-flex items-center gap-1 group/link"
          >
            Ver todos
            <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-0.5">→</span>
          </Link>
        </div>
        <ProductGrid products={products} />
      </section>
    </>
  );
}
