'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Search = () => {

  const [query, setQuery] = useState("")
  const router = useRouter()

  const reDirect = () => {
    if(query === "men"){
      setQuery("men-fabrics")
    }
    router.push(`/collections/${query}`)
  }

  return (
    <div className='absolute h-screen w-full top-0 left-0 bg-black/30 text-center'>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder='Perfumes/fabrics/t shirt' className='w-[75%] outline-none mt-20 bg-white px-5 py-3 text-black placeholder:text-gray-400 border border-black rounded-3xl mr-3' />
      <button onClick={reDirect} className='text-black bg-white border px-8 py-2.5 cursor-pointer border-black rounded-3xl text-sm'>Search</button>
    </div>
  )
}

export default Search
