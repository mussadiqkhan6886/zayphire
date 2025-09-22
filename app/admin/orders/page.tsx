'use client';

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import dynamic from 'next/dynamic'
 
const OrderTable = dynamic(
  () => import('@/components/adminComponents/OrderTable'),
  { ssr: false }
)

const Orders =  () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [data, setData] = useState<any>([])
  
    const fetchData = async () => {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/order`);
      setData(res.data.orders)
    }
  
    useEffect(() => {
      fetchData()
    }, [])
  return (
   <main className='h-full'>
        <OrderTable res={data} />
    </main>
  )
}

export default Orders
