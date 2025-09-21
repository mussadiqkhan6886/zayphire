import axios from 'axios'
import React from 'react'
import Card from './Card'

const MayLike = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`)
  const data = res.data.products.splice(0, 4) // only give 4 items
  return (
    <section>
      <h2>You May Like</h2>
      {data.map(item => (
        <Card {...data} />
      ))}
    </section>
  )
}

export default MayLike
