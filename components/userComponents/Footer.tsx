'use client';

import useView from '@/hooks/useView';
import { instrumentSerif } from '@/lib/fonts/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {motion} from "framer-motion"

const Footer = () => {

  const {setView} = useView()

  return (
    <footer className='md:h-screen flex  flex-col h-full'>
      <div className='bg-white h-[20%] md:h-[60%] py-10 md:py-0 grid place-content-center'>
        <div className='py-20 md:py-0'>
          <p className={`text-center border-b borer-black py-2 my-2 text-[25px] ${instrumentSerif.className}`}>Get the latest trends first</p>
          <div className='flex flex-wrap'>
            <Link className='text-[12px] md:text-base px-2 md:px-4 border-r border-black' href={""}>Facebook</Link>
            <Link className='text-[12px] md:text-base px-2 md:px-4 border-r border-black' href={""}>Instagram</Link>
            <Link className='text-[12px] md:text-base px-2 md:px-4 border-r border-black' href={""}>Tiktok</Link>
            <Link className='text-[12px] md:text-base px-2 md:px-4 ' href={""}>Whatsapp</Link>
          </div>
        </div>
      </div>
      <div className='bg-black px-7 text-white gap-5 md:gap-10 flex py-7 flex-col md:flex-row justify-between h-full md:h-[40%]'>
        <div className="flex justify-between gap-10 items-center w-full lg:w-[60%] md:w-[70%] sm:flex-row flex-col-reverse">
          <div>
            <ul className='leading-8'>
              <li><Link href="/details/#FAQ">FAQ's</Link></li>
              <li><Link href={"signup"}>Signup/Login</Link></li>
              <li><Link href={"/details/#shippingAndDeliveries"}>Shipping & Deliveries</Link></li>
              <li><Link href={"/details/#exchangeAndReturns"}>Exchange & Returns</Link></li>
            </ul>
          </div>
          <div className='flex md:items-center justify-between h-full flex-col items-end'>
            <Image src="/zayphireGray.png" alt='zayphire footer logo image' width={250} height={100} />
            <p className='text-sm'>&copy; Copyright Reserved by Zayphire 2025</p>
          </div>
        </div>
          <motion.div onViewportEnter={() => setView(true)} onViewportLeave={() => setView(false)} className='flex items-center justify-center text-left md:text-right'>
            <ul className='leading-8'>
              <li><Link href={"/details/#about"}>About Us</Link></li>
              <li><Link href={"/details/#contact"}>Contact Us</Link></li>
              <li><Link href={"/details/#terms"}>Terms & Conditions</Link></li>
            </ul>
          </motion.div>
      </div>
      
    </footer>
  )
}

export default Footer
