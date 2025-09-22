 import { NextResponse, NextRequest } from "next/server";
 import { connectDB } from "@/lib/config/database";
 import User from "@/lib/models/UserSchema";
 import { getDataFromToken } from "@/lib/helpers/getDataFromToken";


 await connectDB()

 export async function GET(req: NextRequest){
    try {
        const userId = await getDataFromToken(req)
        const user = await User.findOne({_id: userId}).select("-password")
        return NextResponse.json({message: "User Found", success: true, data: user})

    } catch (error: unknown) {
        return NextResponse.json({err: error}, {status: 500})
    }
 }