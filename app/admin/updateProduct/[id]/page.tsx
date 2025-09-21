import UpdateProduct from '@/components/adminComponents/UpdateProduct'
import axios from 'axios'
import React from 'react'

const Update = async ({params}: {params: Promise<{id:string}>}) => {
  const id = (await params).id
  const data = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`)
  console.log(data)
  const product = data.data.product
  return (
    <main className='flex flex-col items-center '>
      <h1 className="text-3xl font-bold py-6">Update Product {product.name}</h1>
      <UpdateProduct data={product} />
    </main>
  )
}

export default Update
