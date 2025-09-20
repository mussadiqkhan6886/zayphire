import { connectDB } from "@/lib/config/database"
import OrderSchema from "@/lib/models/OrderSchema"
import { NextResponse } from "next/server"

export const GET = async ({context}: {context: {params: Promise<{id: string}>}}) => {
    await connectDB()
    const id = (await params).id
    const res = await OrderSchema.findById({id})

    return NextResponse.json({success:true, data: res}, {status: 201})
}