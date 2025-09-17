'use client'

import { createContext, useState } from "react"

type ViewContextType = {
    view: boolean
    setView: (newView: boolean) => void
}

export const ViewContext = createContext<ViewContextType| undefined>(undefined)

export function ViewProvider({children}: {children: React.ReactNode}){
    const [view, setView] = useState<boolean>(false)

    return (
        <ViewContext.Provider value={{view, setView}}>
            {children}
        </ViewContext.Provider>
    )
}