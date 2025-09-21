'use client';

import { createContext, Dispatch, SetStateAction, useEffect, useState } from "react";

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  images?: string[];
};

type ViewContextType = {
  view: boolean;
  setView: (newView: boolean) => void;
  cart: CartItem[];
  setCart: Dispatch<SetStateAction<CartItem[]>>;
};

export const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: React.ReactNode }) {
  const [view, setView] = useState<boolean>(false);
  const [cart, setCart] = useState<CartItem[]>([]); // ✅ start with empty (safe for SSR)

  // ✅ Load cart from localStorage only after client mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // ✅ Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <ViewContext.Provider value={{ view, setView, cart, setCart }}>
      {children}
    </ViewContext.Provider>
  );
}
