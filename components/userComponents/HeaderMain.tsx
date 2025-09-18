'use client';

import React, { useState } from 'react'
import SideBar from './SideBar'
import Image from 'next/image'
import Link from 'next/link'
import {FiMenu} from "react-icons/fi"
import {FaSearch, FaUser, FaShoppingCart} from "react-icons/fa"
import Search from './Search'
import Cart from './Cart'


const Header = () => {

  const [viewSidebar, setViewSidebar] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [cart, setCart] = useState<boolean>(false)

  return (
    <header className={`px-5 md:px-8 py-7 flex justify-between w-full fixed z-10 top-0 text-black`}>
      <div className='flex gap-10'>
        <FiMenu className='text-xl md:text-lg  cursor-pointer'  onClick={() => setViewSidebar(true)} />
        {viewSidebar &&  <SideBar viewSidebar={viewSidebar} setViewSideBar={setViewSidebar} />}
        <Link href="/">
        <Image src={"/zayphireBlack.png"} alt="zayphire image logo main hero" width={100} className='w-[120px] md:w-full' height={100} />
        </Link>
      </div>
      <div className='flex gap-4 md:gap-12'>
        <FaSearch onClick={() => setShowSearch(true)} className='cursor-pointer' />
        {showSearch && <Search setShowSearch={setShowSearch} />}
        <Link href={"/account"}><FaUser className='cursor-pointer hidden md:block' /></Link>
        <FaShoppingCart onClick={() => setCart(true)} className='cursor-pointer' />
        {cart && <Cart setCart={setCart} />}
      </div>
    </header>
  )
}

export default Header
