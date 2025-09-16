import { instrumentSerif } from '@/lib/fonts/font'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='md:h-screen h-full'>
      <div className='bg-white h-full md:h-[60%] grid place-content-center'>
        <div className='py-20 md:py-0'>
          <h4 className={`text-center border-b borer-black py-2 my-2 text-[20px] ${instrumentSerif.className}`}>Get the latest trends first</h4>
          <div className='flex flex-wrap'>
            <Link className='text-sm md:text-base px-2 md:px-4 border-r border-black' href={""}>Facebook</Link>
            <Link className='text-sm md:text-base px-2 md:px-4 border-r border-black' href={""}>Instagram</Link>
            <Link className='text-sm md:text-base px-2 md:px-4 border-r border-black' href={""}>Tiktok</Link>
            <Link className='text-sm md:text-base px-2 md:px-4 ' href={""}>Whatsapp</Link>
          </div>
        </div>
      </div>
      <div className='bg-black px-7 text-white gap-10 flex py-7 flex-col md:flex-row justify-between h-[40%]'>
        <div className="flex justify-between gap-10 items-center w-full lg:w-[60%] md:w-[70%] sm:flex-row flex-col-reverse">
          <div>
            <ul className='leading-8'>
              <li><Link href="/faq">FAQ's</Link></li>
              <li><Link href={"signup"}>Signup/Login</Link></li>
              <li><Link href={"shipping-and-deliveries"}>Shipping & Deliveries</Link></li>
              <li><Link href={"exchange-and-returns"}>Exchange & Returns</Link></li>
            </ul>
          </div>
          <div className='flex md:items-center justify-between h-full flex-col items-end'>
            <Image src="/zayphireGray.png" alt='zayphire footer logo image' width={250} height={100} />
            <p className='text-sm'>&copy; Copyright Reserved by Zayphire 2025</p>
          </div>
        </div>
          <div className='flex items-center justify-center text-right'>
            <ul className='leading-8'>
              <li><Link href={"about-us"}>About Us</Link></li>
              <li><Link href={"contact"}>Contact Us</Link></li>
            </ul>
          </div>
      </div>
      
    </footer>
  )
}

export default Footer
