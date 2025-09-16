'use client';

import React, { useState } from 'react'
import SideBar from './SideBar'
import Image from 'next/image'
import Link from 'next/link'
import {FiMenu} from "react-icons/fi"
import {FaSearch, FaUser, FaShoppingCart} from "react-icons/fa"
import Search from './Search'
import Cart from './Cart'

interface Props {color: string, size: string}

const Header = ({color, size} : Props) => {

  const [viewSidebar, setViewSidebar] = useState<boolean>(false)

  return (
    <header className={`px-5 md:px-8 py-7 flex justify-between w-full fixed z-10 top-0 ${color === "black" ? "text-black" : "text-white"}`}>
      <div className='flex gap-10'>
        <FiMenu className='text-xl md:text-lg  cursor-pointer'  onClick={() => setViewSidebar(true)} />
        {viewSidebar &&  <SideBar setViewSideBar={setViewSidebar} />}
        <Link href="/">
        <Image src={`${color === "black" ? "/zayphireBlack.png" : "/zayphireGray.png"}`} alt="zayphire image logo main hero" width={size === "big" ? 200 : 150} className='w-[120px] md:w-full' height={100} />
        </Link>
      </div>
      <div className='flex gap-4 md:gap-12'>
        <FaSearch className='cursor-pointer' />
        <Search />
        <FaUser className='cursor-pointer hidden md:block' />
        <FaShoppingCart className='cursor-pointer' />
        <Cart />
      </div>
    </header>
  )
}

export default Header
