'use client';

import useView from '@/hooks/useView';
import React from 'react'

const AddToCart = ({data}: {data: any}) => {
    const {cart, setCart} = useView()

    const addToBasket = () => {
        setCart({...data})
        console.log(cart)
    }
  return (
    <button onClick={addToBasket} className="text-black cursor-pointer bg-white px-6 py-3 text-sm w-full border">
        Add to Basket
    </button>
  )
}

export default AddToCart
