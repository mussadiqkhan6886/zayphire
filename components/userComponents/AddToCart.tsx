    'use client';

    import useView from '@/hooks/useView';
    import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
    const AddToCart = ({ data }: { data: any }) => {
    const { cart, setCart } = useView();
    
    const addToBasket = () => {
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
