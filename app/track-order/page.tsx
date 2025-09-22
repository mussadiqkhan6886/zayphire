"use client";

import axios from "axios";
import React, { FormEvent, useState } from "react";

const Tracking = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<any>(null); // allow object

 const trackOrder = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setError("")
  setData(null)

  try {
    setLoading(true)
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/order`
    )

    const orders = res.data.orders // expect { success: true, order: {...} }
    const order = orders.find((item: Order) => item.orderId == query)
    setData(order)
    console.log(data)
  } catch (err: any) {
    console.log(err.message)
    setError("Order not found!")
  } finally {
    setLoading(false)
  }
}


  return (
    <main className="pt-30 px-30">
      <h1 className="text-center text-3xl font-bold mb-5">TRACK YOUR ORDER</h1>

      <form onSubmit={trackOrder} className="flex gap-10 justify-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Order ID"
          className="outline-none border border-black rounded-3xl w-[50%] bg-white text-black placeholder:text-gray-400 px-4 py-2"
        />
        <button
          type="submit"
          className="bg-black cursor-pointer text-white px-6 py-2 text-sm rounded-3xl"
        >
          {loading ? "Loading..." : "TRACK"}
        </button>
      </form>

      {/* Error message */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      {/* Show Order Details */}
      {data && (
        <div className="mt-10 border p-6 max-w-lg mx-auto bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold mb-3">
            Order ID: {data.orderId}
          </h2>
          <p>
            <strong>Status:</strong> {data.status}
          </p>
          <p>
            <strong>Total:</strong> {data.totalPrice} PKR
          </p>
          <p>
            <strong>Name:</strong> {data.userDetails.fullName}
          </p>
          <p>
            <strong>Email:</strong> {data.userDetails.email}
          </p>
        </div>
      )}
    </main>
  );
};

export default Tracking;
