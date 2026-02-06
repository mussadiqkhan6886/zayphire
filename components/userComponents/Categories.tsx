'use client';

import useView from '@/hooks/useView';
import Link from 'next/link'
import React from 'react'

const Categories = () => {
  const {view} = useView()
  
    return (
      <div className={`absolute z-50  bottom-10 left-0 px-10 md:px-0 md:left-[22%] text-white w-full md:w-[60%] ${view ? "hidden" : "block"} `}>
        <div className='flex  justify-center gap-35 items-center'>
            <Link className=' text-lg tracking-wider' href="/collections/men-fabric">FABRICS</Link>
            <Link className=' text-lg tracking-wider' href={"/collections/men-fragrance"}>FRAGRANCES</Link>
        </div>
      </div>
    )
}

export default Categories
