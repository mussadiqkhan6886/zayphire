'use client'

import { createContext, Dispatch, SetStateAction, useState } from "react"

type ViewContextType = {
    view: boolean
    setView: (newView: boolean) => void
    cart: Cart[]
    setCart: Dispatch<SetStateAction<Cart[]>>
}
type Cart = {
    name: string
    price: number
    quantity: number

}

export const ViewContext = createContext<ViewContextType| undefined>(undefined)

export function ViewProvider({children}: {children: React.ReactNode}){
    const [view, setView] = useState<boolean>(false)
    const [cart, setCart] = useState<Cart[]>([])

    return (
        <ViewContext.Provider value={{view, setView, cart, setCart}}>
            {children}
        </ViewContext.Provider>
    )
}