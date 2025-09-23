"use client";

import React from "react";
import { FaTimes } from "react-icons/fa";
import { motion, Transition } from "framer-motion";
import useView from "@/hooks/useView";
import Image from "next/image";
import Link from "next/link";

const Cart = ({ setShowCart }: { setShowCart: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const { cart, setCart } = useView();

  const variants = {
    open: { x: 0 },
    close: { x: 1000 },
  };

  const transition = {
    type: "tween",
    duration: 0.2,
  } as Transition;

  const removeItem = (productId: string) => {
  setCart((prev) => {
    const updatedCart = prev.filter((item) => item.productId !== productId)
    localStorage.setItem("cart", JSON.stringify(updatedCart)) // ✅ save updated
    return updatedCart
  })
}


  // ✅ Update quantity
  const updateQuantity = (productId: string, type: "inc" | "dec") => {
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity: type === "inc" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };

  // ✅ Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
      transition={transition}
      animate={"open"}
      initial="close"
      variants={variants}
      className="absolute text-black border-l border-black bg-white right-0 top-0 h-screen w-[320px] sm:w-[370px] md:w-[450px] flex flex-col"
    >
      <FaTimes onClick={() => setShowCart(false)} className="absolute cursor-pointer right-3 top-3" />
      <h3 className="mt-5 px-5 text-lg font-semibold">ADD TO YOUR BASKET</h3>

      <div className="flex-1 overflow-y-auto mt-10 px-5">
        {cart.length <= 0 ? (
          <h4 className="px-5 py-2 text-center">YOUR BASKET IS CURRENTLY EMPTY</h4>
        ) : (
          cart.map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between border-b py-3 gap-3"
            >
              {/* Image */}
              {item.images && item.images[0] ? (
                <Image
                  width={60}
                  height={60}
                  src={item.images[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-200 flex items-center justify-center text-xs">
                  No Img
                </div>
              )}

              {/* Name + Price */}
              <div className="flex-1">
                <h4 className="text-sm font-medium">{item.name}</h4>
                <p className="text-xs text-gray-500">PKR {item.price}</p>

                {/* Quantity controls */}
                <div className="flex items-center gap-2 mt-1">
                  <button
                    className="px-2 py-1 border text-xs"
                    onClick={() => updateQuantity(item.productId, "dec")}
                  >
                    -
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    className="px-2 py-1 border text-xs"
                    onClick={() => updateQuantity(item.productId, "inc")}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeItem(item.productId)}
                className="text-red-500 text-xs cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="p-5 border-t">
          <div className="flex justify-between text-sm mb-3">
            <span>Total:</span>
            <span className="font-semibold">PKR {totalPrice.toFixed(2)}</span>
          </div>
          <Link href="/checkout" className="w-full block text-center py-3 bg-black text-white font-semibold">
            CHECKOUT
          </Link>
         
          <Link 
            href="/cart"
            onClick={() => setShowCart(false)}
            className="w-full block text-center py-2 mt-2 border text-sm"
          >
            Shopping Cart
          </Link>
        </div>
      )}
    </motion.div>
  );
};

export default Cart;
