import React from 'react'

const Categories = ({cat}: {cat: string}) => {
  return (
    <div>
      <h3>{cat}</h3>
      <h3>FRAGRANCES</h3>
      <h3>SALE</h3>
      <h3>T-SHIRTS & SHIRTS</h3>
      <h3>FABRICS</h3>
    </div>
  )
}

export default Categories
