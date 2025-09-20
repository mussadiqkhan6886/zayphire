'use client';

import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa';

const Search = ({setShowSearch}: {setShowSearch: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const [query, setQuery] = useState("")
  const router = useRouter()
  const ref = useRef()

  const reDirect = () => {
    if(query.toLowerCase() === "men" || query.toLowerCase() === "fabric" || query.toLowerCase() === "fabrics" || query.toLowerCase() === "clothes" ){
      router.push("/collection/men-fabric")
    }else if(query.toLowerCase() === "perfume" || query.toLowerCase() === "perfumes" || query.toLowerCase() === "fragrance" || query.toLowerCase() === "fragrances"){
      router.push("/collection/men-fragrance")
    }
    setShowSearch(false)
  }

  return (
    <div className='absolute h-screen w-full top-0 left-0 bg-black/30 text-center'>
      <FaTimes onClick={() => setShowSearch(false)} className='mx-auto mt-10 cursor-pointer' />
        <label htmlFor="search" className='hidden'>Search</label>
      <input ref={ref.current} onFocus={ref.current} type="text" id='search' value={query} onChange={e => setQuery(e.target.value)} placeholder='Perfumes/fabrics/t shirt' className='w-[75%] outline-none mt-20 bg-white px-5 py-3 text-black placeholder:text-gray-400 border border-black rounded-3xl mr-3' />
      <button onClick={reDirect} className='text-black bg-white border px-8 py-2.5 cursor-pointer border-black rounded-3xl text-sm'>Search</button>
    </div>
  )
}

export default Search
