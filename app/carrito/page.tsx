import { CartContent } from "@/components/cart/CartContent";

export default function CarritoPage() {
  return (
    <div className="container-narrow py-12 sm:py-16">
      <h1 className="page-heading">Carrito</h1>
      <p className="page-subheading mt-1">
        Revisá los productos y continuá al checkout cuando quieras.
      </p>
      <CartContent />
    </div>
  );
}
