import { ViewContext } from "@/context/ViewContext"
import { useContext } from "react"

const useView = () => {
    const context = useContext(ViewContext)
    if(!context) throw new Error("Value must be used inside provider")
  return context
}

export default useView
