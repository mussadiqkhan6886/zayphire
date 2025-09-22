import React from 'react'

const FilterationHeader = ({breadcrums}: {breadcrums: string}) => {
  return (
    <div className='px-8'>
      <h3 className='uppercase text-lg font-thin'>{breadcrums}</h3>
    </div>
  )
}

export default FilterationHeader
