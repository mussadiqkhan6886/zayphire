'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const Page = () => {
  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;


    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !data.name ||
      !data.message
    ) {
      return;
    }

    try {
      setLoading(true);

      await axios.post("/api/review", data);

      router.push("/#reviews");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 mt-10 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Add Review
        </h1>

        <form onSubmit={submit} className="flex flex-col gap-4">

          {/* Name English */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
            className="border p-2 rounded"
          />


          {/* Message English */}
          <textarea
            name="message"
            placeholder="Review "
            value={data.message}
            onChange={handleChange}
            className="border p-2 rounded"
          />



          <button
            type="submit"
            disabled={loading}
            className="bg-main text-white py-2 rounded"
          >
            {loading ? "Submitting" : "Submit"}
          </button>

        </form>
      </div>
    </main>
  );
};

export default Page;
