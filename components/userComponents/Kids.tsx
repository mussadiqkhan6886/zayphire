import Image from 'next/image'
import React from 'react'
import Categories from './Categories'

const Kids = () => {
  return (
    <div>
      <Categories cat='KIDS' />
      <Image className='h-screen w-full' width={1000} height={1000} src={"/main (1).jpg"} alt='main' />
    </div>
  )
}

export default Kids
