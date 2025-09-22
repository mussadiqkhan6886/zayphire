import { connectDB } from "@/lib/config/database";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"
import User from "@/lib/models/UserSchema";


await connectDB()

export async function POST(request: Request){
    try{
        const reqBody = await request.json()
        const {email, password} = reqBody

        const findUser = await User.findOne({email})

        if(!findUser){
            return NextResponse.json({message: "User does not exist"}, {status: 400})
        }
        
        const validPassword = await bcryptjs.compare(password, findUser.password)
        
        if(!validPassword){
            
            return NextResponse.json({message: "Wrong Password"}, {status: 400})
        }

        const tokenData = {
            id: findUser._id,
            username: findUser.username,
            email: findUser.email
        }

        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: '1d'})

        const response = NextResponse.json({message: "Login Successfully", success: true})

        response.cookies.set("token", token, {
            httpOnly: true
        })

        return response

    }catch(err: unknown){
        return NextResponse.json({error: err}, {status: 500})
    }
}