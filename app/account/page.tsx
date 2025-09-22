"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const Account = () => {
const router = useRouter()

  const logout = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/logout`)
    router.push("/")
  }

  return (
    <main className="pt-25 px-10 flex flex-col md:flex-row gap-5">
      <section className="flex-2 py-10">
        <h1 className="font-bold text-5xl">Account</h1>
      </section>

      <aside className="flex items-center justify-center flex-col h-full px-5">
        <h2 className="text-xl font-semibold">Account Details</h2>


         
            <button
              onClick={logout}
              className="underline text-red-600 cursor-pointer"
            >
              Logout
            </button>
         
  
      </aside>
    </main>
  );
};

export default Account;
