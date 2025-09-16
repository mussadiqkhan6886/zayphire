import Image from 'next/image'
import React from 'react'
import Categories from './Categories'

const Women = () => {
  return (
    <div>
      <Categories cat='WOMEN' />
        <Image className='h-screen w-full' width={1000} height={1000} src={"/main (2).jpg"} alt='main' />
    </div>
  )
}

export default Women
