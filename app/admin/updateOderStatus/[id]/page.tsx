"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

const UpdateOrderStatus = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter()
  const [status, setStatus] = useState("pending") // default
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  
  const handleUpdate = async () => {
    const id  = (await params).id
    try {
      setLoading(true)
      setError("")
      setSuccess("")

      const res = await axios.patch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/order/${id}`,
        { status }
      )

      if (res.data.success) {
        setSuccess("Order status updated successfully ✅")
        setTimeout(() => {
          router.push("/admin/orders") // redirect back to orders page
        }, 1500)
      }
    } catch (err: unknown) {
      console.error(err)
      setError("Failed to update order ❌")
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="pt-20 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Update Order Status</h1>

      {/* Dropdown for status */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
      >
        <option value="pending">Pending</option>
        <option value="processing">Processing</option>
        <option value="shipped">Shipped</option>
        <option value="delivered">Delivered</option>
        <option value="cancelled">Cancelled</option>
      </select>

      <button
        onClick={handleUpdate}
        disabled={loading}
        className="bg-black text-white px-4 py-2 rounded"
      >
        {loading ? "Updating..." : "Update Status"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-600 mt-4">{success}</p>}
    </main>
  )
}

export default UpdateOrderStatus
