import { connectDB } from "@/lib/config/database";
import { NextRequest, NextResponse } from "next/server";
import Product from "@/lib/models/ProductSchema";


export const GET = async () => {
  await connectDB();
  const products = await Product.find({});
  return NextResponse.json({ success: true, products }, { status: 200 });
};