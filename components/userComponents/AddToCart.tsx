'use client';

import useView from '@/hooks/useView';
import React from 'react';

type Cart = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
};

const AddToCart = ({ data }: { data: any }) => {
  let { cart, setCart } = useView();

  const addToBasket = () => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.productId === data._id);

      if (existingItem) {
        // update quantity of existing item
        return prevCart.map(item =>
          item.productId === data._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // add new product
        return [...prevCart, { productId: data._id, name: data.name, price: data.price, quantity: 1 }];
      }
    });
  };

  return (
    <button
      onClick={addToBasket}
      className="text-black cursor-pointer bg-white px-6 py-3 text-sm w-full border"
    >
      Add to Basket
    </button>
  );
};

export default AddToCart;
