import Header from '@/components/userComponents/HeaderMain'
import React from 'react'

const Tracking = () => {
  return (
    <>
    <Header />
      <main className='pt-30 px-30'>
        <h1 className='text-center text-3xl font-bold mb-5'>TRACK YOUR ORDER</h1>
        <form className='flex gap-10 justify-center'>
          <input type="text" placeholder='Order id' className='outline-none border border-black rounded-3xl w-[50%] bg-white text-black placeholder:text-gray-400 px-4 py-2' />
          <button className='bg-black cursor-pointer text-white px-6 py-2 text-sm rounded-3xl'>TRACK</button>
        </form>
      </main>
    </>
  )
}

export default Tracking
