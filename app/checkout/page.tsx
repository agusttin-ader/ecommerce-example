import { CheckoutContent } from "@/components/checkout/CheckoutContent";

export default function CheckoutPage() {
  return (
    <div className="container-narrow py-8 sm:py-12 lg:py-16 min-w-0 animate-fade-in">
      <h1 className="page-heading">Checkout</h1>
      <p className="page-subheading mt-1">
        Revisá tu pedido y completá tus datos para finalizar la compra.
      </p>
      <CheckoutContent />
    </div>
  );
}
