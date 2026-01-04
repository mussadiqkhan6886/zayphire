import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Whatsapp = () => {
  return (
    <div className='fixed bottom-5 right-5'>
      <Link aria-label='whatsapp-link' href={"https://api.whatsapp.com/send/?phone=923265753305&text&type=phone_number&app_absent=0"}><FaWhatsapp aria-label='whatsapp button' size={36} /></Link>
    </div>
  )
}

export default Whatsapp
