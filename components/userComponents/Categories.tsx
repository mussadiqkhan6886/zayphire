import Link from 'next/link'
import React from 'react'

const Categories = ({cat}: {cat: string}) => {
  return (
    <div className='absolute  bottom-10 left-0 px-10 md:px-0 md:left-[22%] text-white w-full md:w-[60%] '>
        <div className='hidden sm:flex  justify-between items-center'>
            <Link href="#main">{cat}</Link>
            <Link href={"#fragrances"}>FRAGRANCES</Link>
            <Link href={"#sale"}>SALE</Link>
            <Link href={"#tshirts"}>T-SHIRTS & SHIRTS</Link>
            <Link href={"#fabrics"}>FABRICS</Link>
        </div>
     
      <div className='flex sm:hidden items-end gap-5 flex-col'>
            <Link href="#main" className='h-2 w-2 bg-gray-200 rounded-full'></Link>
            <Link href={"#fragrances"} className='h-2 w-2 bg-gray-200 rounded-full'></Link>
            <Link href={"#sale"} className='h-2 w-2 bg-gray-200 rounded-full'></Link>
            <Link href={"#tshirts"} className='h-2 w-2 bg-gray-200 rounded-full'></Link>
            <Link href={"#fabrics"} className='h-2 w-2 bg-gray-200 rounded-full'></Link>
      </div>
    </div>
  )
}

export default Categories
