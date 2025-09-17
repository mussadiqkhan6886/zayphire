'use client';

import useView from '@/hooks/useView';
import Link from 'next/link'
import React from 'react'

const Categories = () => {
  const {view} = useView()
  
    return (
      <div className={`absolute z-50  bottom-10 left-0 px-10 md:px-0 md:left-[22%] text-white w-full md:w-[60%] ${view ? "hidden" : "block"} `}>
        <div className='hidden sm:flex  justify-between items-center'>
            <Link href="#main">MEN</Link>
            <Link href={"#fragrances"}>FRAGRANCES</Link>
            <Link href={"#fabrics"}>FABRICS</Link>
        </div>
     
        <div className='flex sm:hidden items-end gap-5 flex-col'>
              <Link href="#main" className='h-2 w-2 bg-gray-200 rounded-full'></Link>
              <Link href={"#fragrances"} className='h-2 w-2 bg-gray-200 rounded-full'></Link>
              <Link href={"#fabrics"} className='h-2 w-2 bg-gray-200 rounded-full'></Link>
        </div>
      </div>
    )
}

export default Categories
