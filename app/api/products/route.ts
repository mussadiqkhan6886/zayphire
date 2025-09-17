import { connectDB } from "@/lib/config/database";
import { NextRequest, NextResponse } from "next/server";
import Product from "@/lib/models/ProductSchema";

await connectDB()

export default async function GET(req: NextRequest){
    const res = await Product.find({})

    return NextResponse.json({success: true, res}, {status:200})
}