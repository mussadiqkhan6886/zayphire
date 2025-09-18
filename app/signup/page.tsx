import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
   <main className="flex h-screen items-center justify-center">
    <section className='lg:w-[30%] md:w-[45%] sm:w-[60%] w-[80%]'>
      <h1 className="detailsHeading text-center">Signup </h1>
      <form
        className=" space-y-4"
      >
        <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            autoComplete="off"
            type="text"
            name="user_name"
            className="w-full border border-gray-300 outline-none rounded-md px-3 py-2 "
            required
          />
          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            autoComplete="off"
            type="password"
            name="user_name"
            className="w-full border border-gray-300 outline-none rounded-md px-3 py-2 "
            required
          />

          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            autoComplete="off"
            type="email"
            name="user_email"
            className="w-full border border-gray-300 outline-none rounded-md px-3 py-2 "
            required
          />

          <input
            autoComplete="off"
            type="submit"
            value="Signup "
            className="w-full border-black bg-black hover:border hover:border-black text-white cursor-pointer font-semibold py-2 rounded-md hover:bg-white hover:text-black transition"
          />
      </form>
      <p className='mt-4'>Already have account? <Link className='underline' href={"/login"}>Login</Link></p>
      </section>
    </main>
  )
}

export default Signup
