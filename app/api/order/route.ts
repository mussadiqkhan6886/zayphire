import Orders from "@/app/admin/orders/page"
import OrderSchema from "@/lib/models/OrderSchema"
import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
    const res = await OrderSchema.find({})

    return NextResponse.json({success:true, orders:res}, {status: 201})
}

export const POST = async (req: NextRequest) => {
    const data = await req.json()

    await OrderSchema.create({data})
}