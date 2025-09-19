import Link from 'next/link'
import React from 'react'

const Account = () => {
  return (
    <main className='pt-25 px-10 flex gap-5'>
      <section className='flex-2 py-10'>
         <h1 className='font-bold text-5xl'>Account</h1>
          <section className='mt-5'>
            <h2 className='text-xl font-semibold'>Order History</h2>
            <p className='text-gray-700'>You haven't placed any orders yet</p>
          </section>
      </section>
     <aside className='flex items-center justify-center flex-col h-full px-5'>
      <h2 className='text-xl font-semibold'>Account Details</h2>
      <p className='text-gray-800'>Mussadiq khan</p>
      <Link className='underline' href={"/"}>Logout</Link>
     </aside>
    </main>
  )
}

export default Account
