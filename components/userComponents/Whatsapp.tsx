import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Whatsapp = () => {
  return (
    <div className='fixed bg-green-500 rounded-full p-1.5  bottom-5 right-5 z-50'>
      <Link className='text-white' aria-label='whatsapp-link' href={"https://api.whatsapp.com/send/?phone=923265753305&text&type=phone_number&app_absent=0"} target='_blank'><FaWhatsapp aria-label='whatsapp button' size={36} /></Link>
    </div>
  )
}

export default Whatsapp
