import React from 'react'

const FilterationHeader = ({breadcrums}: {breadcrums: string}) => {
  return (
    <div className='px-8'>
      <h2 className='uppercase text-lg font-thin'>{breadcrums}</h2>
    </div>
  )
}

export default FilterationHeader
