
import Link from 'next/link'
import React from 'react'

const HomeButton = () => {

  return (
    <header className='py-2'>
          <Link href="/" className="bg-black text-white text-sm md:px-8 px-5 md:py-4 py-2">HOME</Link>
    </header>
  )
}

export default HomeButton
