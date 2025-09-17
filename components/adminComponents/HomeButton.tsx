
import Link from 'next/link'
import React from 'react'

const HomeButton = () => {

  return (
    <header className='py-2'>
          <Link href="/" className="bg-black text-white text-sm px-8 py-4">GO HOME</Link>
    </header>
  )
}

export default HomeButton
