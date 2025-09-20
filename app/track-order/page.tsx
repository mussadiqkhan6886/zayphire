'use client';

import axios from 'axios';
import React, { useState } from 'react'

const Tracking = () => {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [data, setData] = useState("")

  const trackOrder = async () => {
    try{
      setLoading(true)
      const data = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/order/${query}`)
      setData(data.data)
    }catch(err: any){
      console.log(err.message)
      setError(err.message)
    }finally{
      setLoading(false)
    }
  }
  console.log(data)
  
  return (
    <>
      <main className='pt-30 px-30'>
        <h1 className='text-center text-3xl font-bold mb-5'>TRACK YOUR ORDER</h1>
        <form onSubmit={trackOrder} className='flex gap-10 justify-center'>
          <input value={query} onChange={e => setQuery(e.target.value)} type="text" placeholder='Order id' className='outline-none border border-black rounded-3xl w-[50%] bg-white text-black placeholder:text-gray-400 px-4 py-2' />
          <button type='submit' className='bg-black cursor-pointer text-white px-6 py-2 text-sm rounded-3xl'>
            {loading ? "Loading..." : "TRACK"}
          </button>
          {error}
        </form>
        {data}
      </main>
    </>
  )
}

export default Tracking
