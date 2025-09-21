import Image from 'next/image'
import React from 'react'

const CheckoutHeader = () => {
  return (
    <header className='grid place-content-center  py-4 border-b border-gray-300'>
      <Image src={"/zayphireBlack.png"} alt='checkout logo image' width={150} height={150} />
    </header>
  )
}

export default CheckoutHeader
