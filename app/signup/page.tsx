/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const Signup = () => {
  const router = useRouter()
  const [user, setUser ] = useState({
    email: "",
    password: "",
    username: ""
  })
  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  const signUp = async (e: FormEvent) => {
    e.preventDefault()
    try{
      setLoading(true)
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/signup`, user)
      router.push("/login")
    }catch(err: any){
      console.log(err.message)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    if(user.email.length > 0 && user.password.length > 0 && user.username.length > 0){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  }, [user])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value})
  }

  return (
    <main className="flex h-screen items-center justify-center">
      <section className="lg:w-[30%] md:w-[45%] sm:w-[60%] w-[80%]">
        <h1 className="detailsHeading text-center">Signup</h1>
        <form onSubmit={signUp} className="space-y-4">
          <label className="block text-gray-700 font-medium mb-1">Full Name</label>
          <input
            name='username'
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={user.username}
            onChange={handleChange}
            required
          />

          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            name='email'
            type="email"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={user.email}
            onChange={handleChange}
            required
          />

          <label className="block text-gray-700 font-medium mb-1">Password</label>
          <input
            name='password'
            type="password"
            className="w-full border border-gray-300 rounded-md px-3 py-2"
            value={user.password}
            onChange={handleChange}
            required
          />

          <button className={`px-4 mt-5 w-full  py-1.5 border border-gray-600  ${buttonDisabled ? "cursor-not-allowed opacity-50 text-gray-500": "cursor-pointer opacity-100 text-black hover:text-white hover:bg-gray-800"}`}>{loading ? "Processing" : "Signup"}</button>
          
        </form>
        <p className="mt-4">
          Already have an account? <Link className="underline" href="/login">Login</Link>
        </p>
      </section>
    </main>
  );
};

export default Signup;
