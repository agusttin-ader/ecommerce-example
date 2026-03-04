import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug } from "@/lib/products";
import { ProductDetail } from "@/components/product/ProductDetail";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductoPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="container-narrow py-10 sm:py-14">
      <Link href="/productos" className="link-back mb-8 inline-block">
        ← Volver a productos
      </Link>
      <ProductDetail product={product} />
    </div>
  );
}
