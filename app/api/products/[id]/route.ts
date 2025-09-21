import { connectDB } from "@/lib/config/database";
import Product from "@/lib/models/ProductSchema";
import { NextRequest, NextResponse } from "next/server";

type Props = {
    id: Promise<{id:string}>
}

await connectDB()

export const GET = async (req: NextRequest, params: Props) => {
    const id = (await params).id

    const res = await Product.findById({id})

    return NextResponse.json({success: true, product:res}, {status: 201})
}

export const PATCH = async (req: NextRequest, params: Props) => {
    const id = (await params).id
    const data = await req.formData()

    try{
        const result = await Product.findByIdAndUpdate({
            //data
        })
        return NextResponse.json({success: true, product:result}, {status: 201})
    }catch(err){
        console.log(err)
        return NextResponse.json({success:false, message: err.message}, {status: 500})
    }
}

export const DELETE = async (req: NextRequest, params: Props) => {
    const id = (await params).id

    try{
        const res = await Product.findByIdAndDelete({id})
        return NextResponse.json({success: true, product: res}, {status: 201})
    }catch(err: any){
        return NextResponse.json({success:false, message: err.message}, {status: 500})
    }


}