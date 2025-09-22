import React from 'react'
import axios from 'axios'

import dynamic from 'next/dynamic'
 
const DataTable = dynamic(
  () => import('@/components/adminComponents/ProductTable'),
  { ssr: false }
)


const ProductList = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  return (
    <main className='h-full'>
      <DataTable res={res.data.products} />
    </main>
  )
} 

export default ProductList;
