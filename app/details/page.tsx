import Link from 'next/link'
import React from 'react'
import { FaExchangeAlt, FaPeopleCarry, FaPhone, FaQuestion, FaShippingFast } from 'react-icons/fa'

const page = () => {
  return (
    <main className=' px-9 md:px-25 pt-10'>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 md:gap-15 my-20'>
            <Link href={"#about"} className='border border-black p-10 px-5 sm:px-9 lg:px-6   flex items-center justify-center flex-col gap-3'>
                <h2 className='text-lg '>ABOUT US</h2>
                <FaPeopleCarry />
            </Link>
            <Link href={"#exchangeAndReturns"} className='border border-black p-10 px-5 sm:px-9 lg:px-6  flex items-center justify-center flex-col gap-3'>
                <h2 className='text-lg '>Exchange and Returns</h2>
                <FaExchangeAlt />
            </Link>
            <Link href={"#FAQ"} className='border border-black p-10 px-5 sm:px-9 lg:px-6  flex items-center justify-center flex-col gap-3'>
                <h2 className='text-lg '>FAQ</h2>
                <FaQuestion />
            </Link>
            <Link href={"#shippingAndDeliveries"} className='border border-black p-10 px-5 sm:px-9 lg:px-6  flex items-center justify-center flex-col gap-3'>
                <h2 className='text-lg '>Shipping and Deliveries</h2>
                <FaShippingFast />
            </Link>
            <Link href={"#contact"} className='border border-black p-10 px-5 sm:px-9 lg:px-6  flex items-center justify-center flex-col gap-3'>
                <h2 className='text-lg '>Contact us</h2>
                <FaPhone />
            </Link>
        </section>
      <section className='h-screen bg-red-400' id="about"></section>
      <section className='h-screen bg-green-400' id="exchangeAndReturns"></section>
      <section className='h-screen bg-orange-400' id="FAQ"></section>
      <section className='h-screen bg-pink-400' id="shippingAndDeliveries"></section>
      <section className='h-screen bg-yellow-400' id="contact"></section>
    </main>
  )
}

export default page
