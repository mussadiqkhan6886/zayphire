'use client';

import React, { useState } from 'react'
import SideBar from './SideBar'
import Image from 'next/image'
import Link from 'next/link'
import {FiMenu} from "react-icons/fi"
import {FaSearch, FaUser, FaShoppingCart} from "react-icons/fa"
import Search from './Search'
import Cart from './Cart'
import useView from '@/hooks/useView';


const Header = () => {

  const [viewSidebar, setViewSidebar] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const [showCart, setShowCart] = useState<boolean>(false)
  const {cart} = useView()

  const total = cart.length

  return (
    <header className={`px-5 md:px-8 py-7 flex justify-between w-full  z-10 top-0 text-black`}>
      <div className='flex gap-10'>
        <FiMenu className='text-xl md:text-lg  cursor-pointer'  onClick={() => setViewSidebar(true)} />
        {viewSidebar &&  <SideBar setViewSideBar={setViewSidebar} />}
        <Link href="/">
        <Image fetchPriority='high' priority={true} src={"/zayphireBlack.png"} alt="zayphire image logo main hero" width={100} className='w-[120px] md:w-full' height={100} />
        </Link>
      </div>
      <div className='flex gap-4 md:gap-12'>
        <FaSearch onClick={() => setShowSearch(true)} className='cursor-pointer' />
        {showSearch && <Search setShowSearch={setShowSearch} />}
        <Link href={"/account"}><FaUser className='cursor-pointer hidden md:block' /></Link>
        <div className='relative'>
                  <div className='absolute bg-red-700 rounded-full text-center text-[12px] text-white h-[19px] w-[18px] -top-3 -right-2'>{total}</div>
                  <FaShoppingCart onClick={() => setShowCart(true)} className='cursor-pointer' />
                </div>
        {showCart && <Cart setShowCart={setShowCart} />}
      </div>
    </header>
  )
}

export default Header
