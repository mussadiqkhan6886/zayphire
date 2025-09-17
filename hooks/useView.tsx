'use client';

import { ViewContext } from "@/context/ViewContext"
import { useContext } from "react"

const useView = () => {
  const context = useContext(ViewContext)
  if (!context) throw new Error("useView must be used inside a ViewProvider")
  return context // returns { view, setView }
}


export default useView
