'use client';

import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import Dropdown from './ExpandNav';
import {motion, Transition} from "framer-motion"


const SideBar = ({setViewSideBar}: { setViewSideBar: React.Dispatch<React.SetStateAction<boolean>>}) => {

  const [menu, setMenu] = useState("men")

  const variants = {
    open: {x:0},
    close: {x:-400}
  }

  const transition = {
    type: "tween",
    duration: 0.2
  } as Transition

  return (
    <motion.aside initial={"close"} transition={transition} animate={'open'} variants={variants}  className='absolute text-black border-r border-black bg-white left-0 top-0 min-h-screen w-[320px] sm:w-[370px] md:w-[450px]  py-5 px-14 md:px-24'>
      <div className='flex flex-col  justify-between h-[25%] md:h-[30%]'>
        <div>
          <FaTimes onClick={() => setViewSideBar(false)} className='absolute top-7 text-gray-500 left-8 md:left-16 cursor-pointer' />
          <Image src={"/zayphireBlack.png"} alt='zayphire logo menu' width={150} height={100} />
        </div>
        <div className='flex mt-10 items-center justify-center w-full'>
          <h3 className={` ${menu === "men" ? "text-black font-semibold" : "text-gray-700"} hover:text-black cursor-pointer`} onClick={() => setMenu("men")}>MEN</h3>
          {/* <h3 className={` ${menu === "women" ? "text-black font-semibold" : "text-gray-700"} hover:text-black cursor-pointer`} onClick={() => setMenu("women")}>WOMEN</h3>
          <h3 className={` ${menu === "kids" ? "text-black font-semibold" : "text-gray-700"} hover:text-black cursor-pointer`} onClick={() => setMenu("kids")}>KIDS</h3> */}
        </div>
      </div>
      <hr className='absolute w-full left-0 mt-3 opacity-30' />
      <nav className='h-[70%] pt-10'>
        <ul className='leading-10'>
          {menu !== "men" ? <h2 className='text-4xl text-center font-semibold'>COMING SOON</h2> : (
            <>
            <li onClick={() => setViewSideBar(false)} className='mb-10 text-sm hover:font-semibold'><Link href={`/collection/${menu}-new`}>NEW IN</Link></li>
            <li onClick={() => setViewSideBar(false)} className='mb-10 text-sm hover:font-semibold'><Link href={`/collection/${menu}-sale`}>SALE</Link></li>
            <li className='flex justify-between my-2 items-center w-full'>
              <Dropdown menu={menu} setViewSideBar={setViewSideBar} />
            </li>
            <li onClick={() => setViewSideBar(false)} className='text-sm hover:font-semibold my-2 '><Link href={`/collection/${menu}-fragrance`}>FRAGRANCES</Link></li>
            <li onClick={() => setViewSideBar(false)} className='text-sm hover:font-semibold my-2 '><Link href={`/collection/unisex-fragrance`}>UNISEX FRAGRANCES</Link></li>
            {/* <li onClick={() => setViewSideBar(false)} className='text-sm hover:font-semibold my-2 '><Link href={`/collection/${menu}-watches`}>WATCHES</Link></li> */}
            {/* <li onClick={() => setViewSideBar(false)} className='text-sm hover:font-semibold my-2 mb-15'><Link href={`/collection/${menu}-accessories`}>ACCESSORIES</Link></li> */}
            <li onClick={() => setViewSideBar(false)} className='text-sm hover:font-semibold'><Link href={`/track-order`}>TRACK YOUR ORDER</Link></li>
            </>
          )}
          
        </ul>
        <Link className='block md:hidden absolute right-5 bottom-5' href={"/account"}>Account</Link>
      </nav>
    </motion.aside>
  )
}

export default SideBar
