/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const Login = () => {
  const [error, setError] = useState('');

 const router = useRouter()

  const [user, setUser] = useState({
     email: "",
     password: "",
   })
   
   const [buttonDisabled, setButtonDisabled] = useState(false)
   const [loading, setLoading] = useState(false)
 
   const login = async (e: FormEvent) => {
     e.preventDefault()
     try{
       setLoading(true)
       const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, user)
       console.log(res)
       router.push("/account")
     }catch(err: any){
       console.log(err)
       setError(err.message)
     }finally{
       setLoading(false)
     }
   }
 
   useEffect(() => {
     if(user.email.length > 0 && user.password.length > 0){
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
        <h1 className="detailsHeading text-center">Login</h1>
        <form onSubmit={login} className="space-y-4">
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            name='email'
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

          <button className={`px-4 w-full mt-5  py-1.5 border border-gray-600  ${buttonDisabled ? "cursor-not-allowed opacity-50 text-gray-500": "cursor-pointer opacity-100 text-black hover:text-white hover:bg-gray-800"}`}>{loading ? "Processing" : "Login"}</button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
        <p className="mt-4">
          New here? <Link className="underline" href="/signup">Signup</Link>
        </p>
      </section>
    </main>
  );
};

export default Login;
