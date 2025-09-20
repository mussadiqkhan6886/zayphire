import React from 'react'
import DataTable from '@/components/adminComponents/ProductTable'
import axios from 'axios'

const ProductList = async () => {
  // const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  // console.log(res)
  return (
    <main className='h-full'>
      <DataTable  />
    </main>
  )
}

export default ProductList;
