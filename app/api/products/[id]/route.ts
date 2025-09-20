import { connectDB } from "@/lib/config/database";
import Product from "@/lib/models/ProductSchema";
import { NextRequest, NextResponse } from "next/server";

type Props = {
    id: Promise<{id:string}>
}

await connectDB()

export const GET = async (req: {req: NextRequest}, params: Props) => {
    const id = (await params).id

    const res = await Product.findById({id})

    return NextResponse.json({success: true, product:res}, {status: 200})
}