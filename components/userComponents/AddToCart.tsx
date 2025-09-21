'use client';

import useView from '@/hooks/useView';
import React from 'react'

const AddToCart = ({data}: {data: any}) => {
    const {cart, setCart} = useView()

    const addToBasket = () => {
        // if item is already there just update its quaittuy else add new product
        cart.map(item => {
            if(item.productId === data._id){
                setCart({...item, quantity: item.quantity + 1})
            }else{
                setCart({...data, quantity: 1})
            }
        })
        console.log(cart)
    }
  return (
    <button onClick={addToBasket} className="text-black cursor-pointer bg-white px-6 py-3 text-sm w-full border">
        Add to Basket
    </button>
  )
}

export default AddToCart
