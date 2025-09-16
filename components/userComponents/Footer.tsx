import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white flex items-center justify-between'>
      <div className="flex justify-between items-center ">
        <div>
          <ul>
            <li><Link href="/faq">FAQ's</Link></li>
            <li><Link href={"signup"}>Signup/Login</Link></li>
            <li><Link href={"shipping-and-deliveries"}>Shipping & Deliveries</Link></li>
            <li><Link href={"exchange-and-returns"}>Exchange & Returns</Link></li>
          </ul>
        </div>
        <div>
          <Image src="/zayphireGray.png" alt='zayphire footer logo image' width={500} height={500} />
          <p>&copy; Copyright Reserved by Zayphire 2025</p>
        </div>
      </div>
      <div>
        <ul>
          <li><Link href={"about-us"}>About Us</Link></li>
          <li><Link href={"contact"}>Contact Us</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
