import Image from 'next/image'
import React from 'react'
import Categories from './Categories'

const Men = () => {
  return (
    <div>
      <Categories cat='MEN' />
        <Image  className='h-screen w-full' width={1000} height={1000} src={"/main (3).jpg"} alt='main' />
    </div>
  )
}

export default Men
