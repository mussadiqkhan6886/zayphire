import React from 'react'
import axios from 'axios';
import OrderTable from '@/components/adminComponents/OrderTable';

const Orders = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/order`);
  console.log(res.data.orders)
  return (
   <main className='h-full'>
        <OrderTable res={res.data.orders} />
    </main>
  )
}

export default Orders
