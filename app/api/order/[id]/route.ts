import { connectDB } from "@/lib/config/database"
import OrderSchema from "@/lib/models/OrderSchema"
import { NextRequest, NextResponse } from "next/server"

await connectDB()

export const PATCH = async ( req: NextRequest, {params}: {params: Promise<{id: string}>}) => {
    const id = (await params).id

    const {status} = await req.json()

    const update = await OrderSchema.findByIdAndUpdate(id, {status}, {new: true})

    return NextResponse.json({success: true, order: update}, {status: 200})
}