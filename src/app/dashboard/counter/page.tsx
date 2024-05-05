import { CartCounter } from "@/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Shopping Cart Counter",
  description: "Contador Client Side",
};

export default function CounterPage() {

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito</span>

      <CartCounter value={20} />

    </div>
  );
}