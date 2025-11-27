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
      <div className='bg-white h-[40%] sm:h-[30%] md:h-[60%] py-10 md:py-0 grid place-content-center'>
        <div className='py-20 md:py-0'>
          <p className={`text-center border-b borer-black py-2 my-2 text-[25px] ${instrumentSerif.className}`}>Get the latest trends first</p>
          <div className='flex flex-wrap'>
            <Link className='text-[12px] md:text-base px-2 md:px-4 border-r border-black' href={"https://www.facebook.com/profile.php?id=61576012477951"}>Facebook</Link>
            <Link className='text-[12px] md:text-base px-2 md:px-4 border-r border-black' href={"https://www.instagram.com/zayphire_/?__pwa=1"}>Instagram</Link>
            <Link className='text-[12px] md:text-base px-2 md:px-4 border-r border-black' href={"https://www.tiktok.com/@zayphire_?_t=ZS-8zxxFtzxQ9d&_r=1"}>Tiktok</Link>
            <Link className='text-[12px] md:text-base px-2 md:px-4 ' href={"https://api.whatsapp.com/send/?phone=923265753305&text&type=phone_number&app_absent=0"}>Whatsapp</Link>
          </div>
        </div>
      </div>
      <div className='bg-black px-7 text-white gap-5 md:gap-10 flex py-7 flex-col md:flex-row md:justify-between h-full md:h-[40%]'>
        <div className="flex md:justify-between md:gap-10 items-center w-full lg:w-[60%] md:w-[70%] sm:flex-row flex-col-reverse text-sm">
          <div className='flex items-center gap-5'>
            <ul className='leading-8'>
              <li><Link href="/details/#FAQ">FAQ&apos;s</Link></li>
              <li><Link href={"signup"}>Signup/Login</Link></li>
              <li><Link href={"/details/#shippingAndDeliveries"}>Shipping & Deliveries</Link></li>
              <li><Link href={"/details/#exchangeAndReturns"}>Exchange & Returns</Link></li>
            </ul>
            <motion.div onViewportEnter={() => setView(true)} onViewportLeave={() => setView(false)} className='flex items-center justify-center text-left md:text-right text-sm md:hidden'>
            <ul className='leading-8'>
              <li><Link href={"/details/#about"}>About Us</Link></li>
              <li><Link href={"/details/#contact"}>Contact Us</Link></li>
              <li><Link href={"/details/#terms"}>Terms & Conditions</Link></li>
            </ul>
          </motion.div>
          </div>
          <div className='flex md:items-center justify-between h-full flex-col items-end scale-75 md:scale-100'>
            <Image src="/zayphireGray.png" alt='zayphire footer logo image' width={250} height={100}  />
            <p className='text-sm'>&copy; Copyright Reserved by Zayphire 2025</p>
          </div>
        </div>
          <motion.div onViewportEnter={() => setView(true)} onViewportLeave={() => setView(false)} className='md:flex items-center justify-center text-left md:text-right text-sm hidden '>
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
