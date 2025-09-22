/* eslint-disable @typescript-eslint/no-explicit-any */

import { connectDB } from "@/lib/config/database";
import Product from "@/lib/models/ProductSchema";
import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/config/cloudinary";

type Params = {
  params: Promise<{id:string}>
};

// ✅ GET single product
export const GET = async (_req: NextRequest, { params }: Params) => {
  await connectDB();
  const id = (await params).id
  try {
    const product = await Product.findById(id);
    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, product }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};

// ✅ PATCH update product
export const PATCH = async (req: NextRequest, { params }: Params) => {
  await connectDB();
  const id = (await params).id
  try {
    const formData = await req.formData();

    const files = formData.getAll("images") as File[];
    const uploadedImages: string[] = [];

    // If new images are uploaded → upload to Cloudinary
    if (files && files.length > 0 && files[0] instanceof File) {
      for (const file of files) {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadRes = await new Promise<any>((resolve, reject) => {
          cloudinary.uploader
            .upload_stream({ folder: "zayphire" }, (error, result) => {
              if (error) reject(error);
              else resolve(result);
            })
            .end(buffer);
        });

        uploadedImages.push(uploadRes.secure_url);
      }
    }

    // Convert FormData → plain object
    const updateFields: any = {};
    formData.forEach((value, key) => {
      if (key !== "images") {
        if (key === "price") updateFields[key] = Number(value);
        else if (key === "isSale" || key === "inStock")
          updateFields[key] = value === "true";
        else updateFields[key] = value;
      }
    });

    
    
    const product = await Product.findByIdAndUpdate(id, updateFields, {
      new: true,
    });
    if (uploadedImages.length > 0) {
    updateFields.images = [
      ...(product?.images || []), // keep existing
      ...uploadedImages           // add new
    ];}

    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, product }, { status: 200 });
  } catch (err: any) {
    console.error("Update error:", err);
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};

// ✅ DELETE product
export const DELETE = async (_req: NextRequest, { params }: Params) => {
  await connectDB();
  const id = (await params).id
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, product }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};
