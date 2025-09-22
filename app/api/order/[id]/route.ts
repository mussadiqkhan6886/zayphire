import { connectDB } from "@/lib/config/database"
import OrderSchema from "@/lib/models/OrderSchema"
import { NextRequest, NextResponse } from "next/server"

export const GET = async ({params}: {params: Promise<{id: string}>}) => {
    await connectDB()
    const id = (await params).id
    const res = await OrderSchema.findOne({id})

    return NextResponse.json({success:true, order: res}, {status: 201})
}

export const PATCH = async ({params}: {params: Promise<{id: string}>}, req: NextRequest) => {
    const id = (await params).id

    const {status} = await req.json()

    const update = await OrderSchema.findByIdAndUpdate(id, {status}, {new: true})

    return NextResponse.json({success: true, order: update}, {status: 200})
}