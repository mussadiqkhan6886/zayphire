'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'

import dynamic from 'next/dynamic'
 
const DataTable = dynamic(
  () => import('@/components/adminComponents/ProductTable'),
  { ssr: false }
)


const ProductList = () => {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any>([])

  const fetchData = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
    setData(res.data.products)
    console.log(res)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main className='h-full'>
      <DataTable res={data} />
    </main>
  )
} 

export default ProductList;
