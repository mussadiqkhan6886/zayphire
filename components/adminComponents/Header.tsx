import Link from 'next/link'
import React from 'react'
import HomeButton from './HomeButton'
import { FaList, FaPlus, FaShoppingBag } from "react-icons/fa";
import Logout from './Logout';

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full py-3 max-h-[60px] md:px-12 px-2 border-b border-black ">
        <h1 className="font-bold text-1xl md:text-3xl ">Admin Panel</h1>
        <div className="flex md:gap-10 gap-4">
            <Link aria-label="add new product" href={"/admin/addProduct"}><FaPlus /></Link>
            <Link aria-label="show product list" href={"/admin/productList"}><FaList /></Link>
            <Link aria-label="show all orders   " href={"/admin/orders"}><FaShoppingBag /></Link>
        </div>
        <Logout />
        <HomeButton />
    </div>
  )
}

export default Header
