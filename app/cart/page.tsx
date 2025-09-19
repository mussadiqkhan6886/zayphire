import Image from "next/image";
import { FaTrash } from "react-icons/fa";

export default function CartPage() {
  return (
    <main className="pt-24 px-6 lg:px-20">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-10">Shopping Basket</h1>

      {/* Cart Section */}
      <section className="space-y-6">
        {/* Header */}
        <div className="hidden md:grid grid-cols-4 gap-4 text-gray-500 border-b border-gray-300 pb-3">
          <h2 className="col-span-2 text-[12px] font-thin">PRODUCT</h2>
          <h2 className=" text-[12px] font-thin">QUANTITY</h2>
          <h2 className="text-right text-[12px] font-thin">TOTAL</h2>
        </div>

        {/* Cart Item */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4  border-b border-gray-300 pb-6">
          {/* Product Image */}
          <div className="flex  gap-4 col-span-2">
            <Image
              src={"/main (2).jpg"}
              alt="Basic jogger trousers"
              width={100}
              height={100}
              className="rounded-md border"
            />
            <div>
              <h3 className="font-semibold">Basic Jogger Trousers</h3>
              <p className="text-sm text-gray-500 mb-3">PKR 5490</p>
              <p className="text-sm text-gray-500">Color: Mashroom</p>
              <p className="text-sm text-gray-500">Size: S</p>
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex justify-start gap-3">
            <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">
              -
            </button>
            <p className="w-8 text-center">3</p>
            <button className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">
              +
            </button>
            <button className="ml-3 flex justify-start items-start pt-2 text-red-500 hover:text-red-700">
              <FaTrash />
            </button>
          </div>

          {/* Total Price */}
          <p className="text-right">PKR 5490</p>
        </div>
      </section>

      {/* Summary Section */}
      <section className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="text-gray-600 text-sm">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="space-y-2 text-right w-full md:w-[35%]">
          <p className="text-lg font-semibold">
            Subtotal: <span>PKR 5490</span>
          </p>
          <button className="bg-black text-white text-sm  w-full cursor-pointer py-2">
            Proceed to Checkout
          </button>
          <button className="bg-white text-sm border w-full text-black block  cursor-pointer py-2">
            Continue Shopping
          </button>
        </div>
      </section>
    </main>
  );
}
