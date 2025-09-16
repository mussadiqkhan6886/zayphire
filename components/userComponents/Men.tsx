import Image from 'next/image'
import React from 'react'
import Categories from './Categories'

const Men = () => {
  return (
    <div>
      <Categories cat='MEN' />
        <Image  className='h-screen w-full' width={1000} height={1000} src={"/main (3).jpg"} alt='main' />
        <Image id='fragrances' className='h-screen w-full' width={1000} height={1000} src={"/main (2).jpg"} alt='main' />
        <Image id='sale' className='h-screen w-full' width={1000} height={1000} src={"/main (1).jpg"} alt='main' />
    </div>
  )
}

export default Men
