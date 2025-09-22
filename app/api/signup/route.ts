import { connectDB } from "@/lib/config/database";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import User from "@/lib/models/UserSchema";

await connectDB()

export async function POST(request: NextRequest){
    try{
        const reqBody = await request.json()
        const {username, password, email} = reqBody

        const user = await User.findOne({email})

        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPass = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashPass
        })

        const savedUser = await newUser.save()

        return NextResponse.json({message: "User created successfully", success: true, savedUser})

    }catch(err: any){
        return NextResponse.json({error: err.message}, {status: 500})
    }
}