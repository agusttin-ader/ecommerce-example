import { CheckoutContent } from "@/components/checkout/CheckoutContent";

export default function CheckoutPage() {
  return (
    <div className="container-narrow py-12 sm:py-16">
      <h1 className="page-heading">Checkout</h1>
      <p className="page-subheading mt-1">
        Revisá tu pedido. El pago es simulado; para pagos reales ver Etapa 6.
      </p>
      <CheckoutContent />
    </div>
  );
}
