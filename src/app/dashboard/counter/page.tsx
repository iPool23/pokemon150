import { CartCounter } from "@/shopping-cart/components/CartCounter";

export const metadata = {
  title: "Shopping Cart Counter",
  description: "Contador Client Side",
};

export default function CounterPage() {

  return (

    <div className='flex items-center justify-center min-h-screen from-gray-800 via-greeen-300 to-blue-500 bg-gradient-to-br'>
      <div className='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl'>
        <div className='max-w-md mx-auto space-y-6'>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
              <h1 className="text-2xl tracking-tight font-extrabold lg:text-2xl text-primary-600 dark:text-primary-500">Productos en el carrito</h1>
              <CartCounter value={20} />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}