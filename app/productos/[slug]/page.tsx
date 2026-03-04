import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug } from "@/lib/products";
import { ProductDetail } from "@/components/product/ProductDetail";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: `${product.name} | Tienda`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
    },
  };
}

export default async function ProductoPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="container-narrow py-8 sm:py-10 lg:py-14 min-w-0">
      <Link href="/productos" className="link-back mb-6 sm:mb-8 inline-block">
        ← Volver a productos
      </Link>
      <div className="animate-slide-up">
        <ProductDetail product={product} />
      </div>
    </div>
  );
}
