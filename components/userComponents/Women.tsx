import Image from 'next/image'
import React from 'react'

const Women = () => {
  return (
    <div className='h-screen'>
       <Image className='w-full h-screen sticky top-0'  width={1000} height={1000} src={"/main (2).jpg"} alt='main' />
      <Image className='w-full h-screen sticky top-0'  width={1000} height={1000} src={"/main (3).jpg"} alt='main' />
      <Image className='w-full h-screen sticky top-0'  width={1000} height={1000} src={"/main (1).jpg"} alt='main' />
    </div>
  )
}

export default Women
