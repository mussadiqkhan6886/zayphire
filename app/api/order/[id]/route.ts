import { connectDB } from "@/lib/config/database"
import OrderSchema from "@/lib/models/OrderSchema"
import { NextRequest, NextResponse } from "next/server"

export const GET = async ({params}: {params: Promise<{id: string}>}) => {
    await connectDB()
    const id = (await params).id
    const res = await OrderSchema.findById({id})

    return NextResponse.json({success:true, data: res}, {status: 201})
}

export const PATCH = async ({params}: {params: Promise<{id: string}>}, req: NextRequest) => {
    const id = (await params).id

    const data = await req.json()

    const update = await OrderSchema.findByIdAndUpdate(id, data)

    return NextResponse.json({success: true, order: update}, {status: 200})
}