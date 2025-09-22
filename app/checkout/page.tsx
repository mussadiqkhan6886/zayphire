'use client';

import React, { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import CheckoutHeader from "@/components/userComponents/CheckoutHeader";
import useView from "@/hooks/useView";
import axios from "axios";
import Image from "next/image";

const Checkout = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    notes: "",
  });

  const { cart, setCart } = useView();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const generateTotalAmount = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!cart || cart.length === 0) {
      setStatus("Your cart is empty.");
      return;
    }

    setStatus("Sending...");
    setLoading(true);

    const data = {
      // include images for each item
      items: cart.map((item) => ({
        productId: item.productId,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        images: item.images && item.images.length ? [item.images[0]] : []
      })),
      totalPrice: generateTotalAmount(),
      userDetails: {
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
      },
      note: formData.notes || "No Notes",
      shippingAddress: {
        city: formData.city,
        postalCode: formData.postalCode || "No Postal Code",
        address: formData.address,
      },
    };

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/order`,
        data
      );

      console.log("Order response:", res);
      setStatus("Order placed successfully!");

      setCart([]) // clear state
        localStorage.setItem("cart", JSON.stringify([])) // clear localStorage

      // redirect to thank you page
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <CheckoutHeader />
      <main className="flex flex-col md:flex-row justify-between">
        {/* LEFT: FORM */}
        <div className="w-full pt-5 border-r lg:pl-20 pl-5 pr-5 border-gray-300 md:w-2/3">
          <h1 className="text-3xl text-center font-bold mb-6 border-b border-gray-300 pb-2">
            Checkout
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
          >
            <div className="space-y-4">
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                required
                value={formData.fullName}
                onChange={handleChange}
                className="border-gray-300 outline-none w-full p-3 border rounded-md"
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                value={formData.phone}
                onChange={handleChange}
                className="border-gray-300 outline-none w-full p-3 border rounded-md"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="border-gray-300 outline-none w-full p-3 border rounded-md"
              />
              <input
                name="city"
                type="text"
                placeholder="City"
                required
                value={formData.city}
                onChange={handleChange}
                className="border-gray-300 outline-none w-full p-3 border rounded-md"
              />
            </div>

            <div className="space-y-4">
              <input
                name="address"
                placeholder="Full Address"
                required
                value={formData.address}
                onChange={handleChange}
                className="w-full border-gray-300 outline-none p-3 border rounded-md"
              />
              <input
                name="postalCode"
                type="text"
                placeholder="Postal Code (optional)"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full p-3 border-gray-300 outline-none border rounded-md"
              />
              <textarea
                name="notes"
                placeholder="Order Notes (optional)"
                value={formData.notes}
                onChange={handleChange}
                className="w-full p-3 border-gray-300 outline-none border rounded-md"
              />
            </div>

            <p className="text-green-600 text-center border py-2 md:col-span-2">
              Shipping Method: <strong>Free Shipping</strong>
            </p>
            <p className="text-green-600 text-center border py-2 md:col-span-2">
              Payment Method: <strong>Cash on Delivery</strong>
            </p>

            <button
              type="submit"
              disabled={loading || cart.length === 0}
              className={`md:col-span-2 w-full cursor-pointer text-white py-3 rounded-md transition ${
                loading ? "bg-gray-600" : "bg-black hover:bg-gray-800"
              }`}
            >
              {loading ? "Loading..." : "Place Order"}
            </button>
          </form>

          {status && (
            <p className="mt-4 text-center text-blue-600 font-medium">{status}</p>
          )}
        </div>

        {/* RIGHT: CART SUMMARY */}
        <div className="w-full md:w-1/3 bg-gray-100 py-6 px-6">
          <h3 className="text-xl font-semibold mb-4">Your Cart</h3>

          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.productId}
                  className="flex justify-between items-center border-b py-2"
                >
                  <div className="flex gap-5">
                    {item.images && item.images[0] ? (
                      <Image
                        width={100}
                        height={100}
                        className="w-[70px] h-[70px] object-cover rounded"
                        src={item.images[0]}
                        alt={item.name}
                      />
                    ) : (
                      <div className="w-[70px] h-[70px] bg-gray-200 flex items-center justify-center text-xs">
                        No Img
                      </div>
                    )}
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium">{item.price * item.quantity} PKR</p>
                </div>
              ))}

              <div className="flex justify-between mt-4 font-bold text-lg">
                <span>Total:</span>
                <span>{generateTotalAmount()} PKR</span>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Checkout;
