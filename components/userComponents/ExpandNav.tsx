'use client'

import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import Link from "next/link"

const Dropdown = ({menu, setViewSideBar}: {menu: string, setViewSideBar: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full ">
      {/* Heading */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full cursor-pointer"
      >
        <span className="text-sm">CLOTHING</span>
        <FaChevronDown
          className={`transition-transform duration-300 text-sm text-gray-700 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Dropdown links */}
      {open && (
        <div className="my-2 text-sm ml-4 flex flex-col gap-1">
          <Link onClick={() => setViewSideBar(false)} href={`/collection/${menu}-fabric`}>FABRICS</Link>
          <Link onClick={() => setViewSideBar(false)} href={``}>T-SHIRTS <span className="text-red-700">coming soon</span></Link>
        </div>
      )}
    </div>
  )
}

export default Dropdown
