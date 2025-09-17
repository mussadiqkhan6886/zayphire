'use client'

import { useState } from "react"
import { FaChevronDown } from "react-icons/fa"
import Link from "next/link"

const Dropdown = ({menu}: {menu: string}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full ">
      {/* Heading */}
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full cursor-pointer"
      >
        <span>Clothing</span>
        <FaChevronDown
          className={`transition-transform duration-300 text-sm text-gray-700 ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* Dropdown links */}
      {open && (
        <div className="my-2 ml-4 flex flex-col gap-2">
          <Link href={`/collection/${menu}-fabric`}>Fabrics</Link>
          <Link href={`/collection/${menu}-tshirt`}>T-Shirts</Link>
        </div>
      )}
    </div>
  )
}

export default Dropdown
