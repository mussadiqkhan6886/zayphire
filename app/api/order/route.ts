import OrderSchema from "@/lib/models/OrderSchema"
import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
    try{
        const res = await OrderSchema.find({})
        return NextResponse.json({success:true, orders:res}, {status: 201})
    }catch(err: any){
        return NextResponse.json({success:false, message: err.message}, {status:500})
    }

}

export const POST = async (req: NextRequest) => {
    const data = await req.json()
    try{
        const res = await OrderSchema.create({data})
        return NextResponse.json({success:true, orders:res}, {status: 201})
    }catch(err: any){
        return NextResponse.json({success:false, message: err.message}, {status:500})
    }
}