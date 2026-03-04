import { CartContent } from "@/components/cart/CartContent";

export default function CarritoPage() {
  return (
    <div className="container-narrow py-8 sm:py-12 lg:py-16 min-w-0 animate-fade-in">
      <h1 className="page-heading">Carrito</h1>
      <p className="page-subheading mt-1">
        Revisá los productos y continuá al checkout cuando quieras.
      </p>
      <CartContent />
    </div>
  );
}
