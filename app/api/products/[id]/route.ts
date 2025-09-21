import { connectDB } from "@/lib/config/database";
import Product from "@/lib/models/ProductSchema";
import { NextRequest, NextResponse } from "next/server";

await connectDB();

type Params = {
  params: {
    id: string;
  };
};

// GET single product
export const GET = async (_req: NextRequest, { params }: Params) => {
  try {
    const product = await Product.findById(params.id);
    if (!product) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, product }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
};

// PATCH (update product)
export const PATCH = async (req: NextRequest, { params }: Params) => {
  try {
    const data = await req.json(); // send JSON body
    const product = await Product.findByIdAndUpdate(params.id, data, { new: true });
    return NextResponse.json({ success: true, product }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
};

// DELETE product
export const DELETE = async (_req: NextRequest, { params }: Params) => {
  try {
    const product = await Product.findByIdAndDelete(params.id);
    if (!product) {
      return NextResponse.json({ success: false, message: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ success: true, product }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
};
