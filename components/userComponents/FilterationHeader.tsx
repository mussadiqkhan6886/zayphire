import React from 'react'
import { FaBox, FaFilter, FaStop } from 'react-icons/fa'

const FilterationHeader = ({breadcrums}: {breadcrums: string}) => {
  return (
    <div className='flex px-8 justify-between items-center'>
      <h3 className='uppercase text-lg font-thin'>{breadcrums}</h3>
      <FaFilter />
    </div>
  )
}

export default FilterationHeader
