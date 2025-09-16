'use client';

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaTimes, FaGreaterThan } from 'react-icons/fa'


const SideBar = ({setViewSideBar}: {setViewSideBar: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const [menu, setMenu] = useState("men")

  return (
    <aside className='absolute text-black border-r border-black bg-white left-0 top-0 h-screen w-[320px] sm:w-[370px] md:w-[450px]  py-5 px-14 md:px-24'>
      <div className='flex flex-col  justify-between h-[25%] md:h-[30%]'>
        <div>
          <FaTimes onClick={() => setViewSideBar(false)} className='absolute top-7 text-gray-500 left-8 md:left-16 cursor-pointer' />
          <Image src={"/zayphireBlack.png"} alt='zayphire logo menu' width={150} height={100} />
        </div>
        <div className='flex justify-between w-full'>
          <h3 className={` ${menu === "men" ? "text-black" : "text-gray-700"} hover:text-black cursor-pointer`} onClick={() => setMenu("men")}>MEN</h3>
          <h3 className={` ${menu === "women" ? "text-black" : "text-gray-700"} hover:text-black cursor-pointer`} onClick={() => setMenu("women")}>WOMEN</h3>
          <h3 className={` ${menu === "kids" ? "text-black" : "text-gray-700"} hover:text-black cursor-pointer`} onClick={() => setMenu("kids")}>KIDS</h3>
        </div>
      </div>
      <hr className='absolute w-full left-0 mt-3 opacity-30' />
      <nav className='h-[70%] pt-10'>
        <ul className='leading-8'>
          <li className='mb-10'><Link href={`/collection/${menu}-new`}>New In</Link></li>
          <li className='mb-10'><Link href={`/collection/${menu}-sale`}>Sale</Link></li>
          <li className='flex justify-between  items-center w-full'>
            <p>Clothing</p>
            <FaGreaterThan className='rotate-[90deg] opacity-50 font-thin' />
          </li>
          <li><Link href={`/collection/${menu}-fragrance`}>Fragrances</Link></li>
          <li className='mb-10'><Link href={`/collection/${menu}-accessories`}>Accessories</Link></li>
          <li><Link href={`/track-order`}>Track Order</Link></li>
        </ul>
      </nav>
    </aside>
  )
}

export default SideBar
