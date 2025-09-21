'use client';

import useView from "@/hooks/useView";
import Image from "next/image";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";

export default function CartPage() {

  const { cart } = useView()

  console.log(cart)
  const totalPrice = cart.map(item => {
    let priceTotal =+ item.quantity * item.price
    return priceTotal
  })

  const increment = () => {

  }

  const decrement =  () => {

  }

  const removeItem = () => {
    
  } 

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
        {cart.map(item => (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4  border-b border-gray-300 pb-6">
            {/* Product Image */}
            <div className="flex  gap-4 col-span-2">
              <Image
                src={item.image[0]}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-md border"
              />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500 mb-3">PKR {item.price}</p>
                <p className="text-sm text-gray-500">Color: {item.color}</p>
                <p className="text-sm text-gray-500">Size: {item.size}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex justify-start gap-3">
              <button onClick={decrement} className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">
                -
              </button>
              <p  className="w-8 text-center">{item.quantity}</p>
              <button onClick={increment} className="w-8 h-8 flex items-center justify-center border rounded hover:bg-gray-100">
                +
              </button>
              <button onClick={removeItem} className="ml-3 flex justify-start items-start pt-2 text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>

            {/* Total Price */}
            <p className="text-right">PKR {totalPrice()}</p>
          </div>
        ))}
      </section>

      {/* Summary Section */}
      <section className="mt-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <p className="text-gray-600 text-sm">
          Free Shipping and taxes included
        </p>
        <div className="space-y-2 text-right w-full md:w-[35%]">
          <p className="text-lg font-semibold">
            Total: <span>PKR {totalPrice}</span>
          </p>
          <Link href="/checkout" className="bg-black block text-center text-white text-sm  w-full cursor-pointer py-2">
            Checkout
          </Link>
          <Link href="/" className="bg-white text-sm border text-center w-full text-black block  cursor-pointer py-2">
            Continue Shopping
          </Link>
        </div>
      </section>
    </main>
  );
}
