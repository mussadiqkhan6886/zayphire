'use client';

import useView from '@/hooks/useView';
import Link from 'next/link'
import React from 'react'

const Categories = () => {
  const {view} = useView()
  
    return (
      <div className={`absolute z-50  bottom-10 left-0 px-10 md:px-0 md:left-[22%] text-white w-full md:w-[60%] ${view ? "hidden" : "block"} `}>
        <div className='hidden md:flex  justify-between items-center'>
            <Link href="#main">MEN</Link>
            <Link href={"#fragrances"}>FRAGRANCES</Link>
            <Link href={"#fabrics"}>FABRICS</Link>
        </div>
      </div>
    )
}

export default Categories
