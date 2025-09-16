import React from 'react'
import SideBar from './SideBar'
import Image from 'next/image'
import Link from 'next/link'

interface Props {color: string, size: string}

const Header = ({color, size} : Props) => {
  return (
    <header className={`px-7 py-5 flex justify-between fixed z-10 top-0 ${color === "black" ? "text-black" : "text-white"}`}>
      <div className='flex gap-10'>
        {/* hamburger */}
        <SideBar />
        <Link href="/">
        <Image src={`${color === "black" ? "/zayphireBlack.png" : "/zayphireGray.png"}`} alt="zayphire image logo main hero" width={size === "big" ? 200 : 150} height={100} />
        </Link>
      </div>
      <div>
        {/* icons */}
      </div>
    </header>
  )
}

export default Header
