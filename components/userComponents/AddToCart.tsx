    'use client';

    import useView from '@/hooks/useView';
    import React, { useEffect, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
    const AddToCart = ({ data }: { data: any }) => {
    const { cart, setCart } = useView();
    const [added, setAdded] = useState(false)
    const addToBasket = () => {
      setAdded(true)
        setCart((prevCart) => {
        const existingItem = prevCart.find(item => item.productId === data._id);

        if (existingItem) {
          return prevCart.map(item =>
            item.productId === data._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          return [
            ...prevCart,
            {
              productId: data._id,
              name: data.name,
              price: data.price,
              quantity: 1,
              images: data.images,
              color: data.color,
              size: data.length
            },
          ];
        }
      });

      setTimeout(() => {
        setAdded(false)
      }, 1500)
    };

    const item = cart.find(cartItem => cartItem.name === data.name)

    const updateQuantity = (productId: string, type: "inc" | "dec") => {
    setCart((prev) =>
      prev.map((item) =>
        item.productId === productId
          ? {
              ...item,
              quantity: type === "inc" ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
            }
          : item
      )
    );
  };


    return (
      <div className='flex items-center gap-3'>
          {item && <div className="flex border items-center py-3 gap-2 mt-1">
            <button
              className="px-5 text-xs"
              onClick={() => updateQuantity(item.productId, "dec")}
            >
              -
            </button>
            <span className="text-sm">{item.quantity}</span>
            <button
              className="px-5 text-xs"
              onClick={() => updateQuantity(item.productId, "inc")}
            >
              +
            </button>
          </div>}
      <button
        onClick={addToBasket}
        disabled={added}
        className="text-black disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer bg-white px-6 py-3 text-sm w-full border"
        >
        {added ? "Added" : "Add to Basket"}
        </button>
      </div>
    );
    };

    export default AddToCart;
