'use client';

import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { motion } from "framer-motion"

const Cart = ({setCart}: {setCart: React.Dispatch<React.SetStateAction<boolean>>}) => {
   const variants = {
    open: {x:0},
    close: {x:1000}
  }

  const transition = {
    type: "tween",
    duration: 0.2
  }

  return (
    <motion.div transition={transition} animate={"open"} initial="close" variants={variants} className='absolute text-black border-l border-black bg-white right-0 top-0 h-screen w-[320px] sm:w-[370px] md:w-[450px]'>
      <FaTimes onClick={() => setCart(false)} className='absolute cursor-pointer right-3 top-3' />
      <h3 className='mt-5 px-5 text-lg font-semibold' >ADD TO YOUR BASKET</h3>
      <div className='mt-10 text-center text-sm '>
        <h4 className='px-5 py-2'>YOUR BASKET IS CURRENTLY EMPTY</h4>
        <button className='w-full py-3 bg-black text-white font-thing'>CONTINUE SHOPPING</button>
      </div>
    </motion.div>
  )
}

export default Cart
