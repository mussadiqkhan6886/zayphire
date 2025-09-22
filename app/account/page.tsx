"use client";

import React from "react";

const Account = () => {

  return (
    <main className="pt-25 px-10 flex flex-col md:flex-row gap-5">
      <section className="flex-2 py-10">
        <h1 className="font-bold text-5xl">Account</h1>
      </section>

      <aside className="flex items-center justify-center flex-col h-full px-5">
        <h2 className="text-xl font-semibold">Account Details</h2>

          <>
            {/* show username from session */}
            <p className="text-gray-800">
              mussadiq
            </p>

            {/* logout */}
            <button
              
              className="underline text-red-600"
            >
              Logout
            </button>
          </>
  
      </aside>
    </main>
  );
};

export default Account;
