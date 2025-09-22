'use client';

import React from 'react'
import axios from 'axios';
import dynamic from 'next/dynamic'
 
const OrderTable = dynamic(
  () => import('@/components/adminComponents/OrderTable'),
  { ssr: false }
)

const Orders = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/order`);
  return (
   <main className='h-full'>
        <OrderTable res={res.data.orders} />
    </main>
  )
}

export default Orders
