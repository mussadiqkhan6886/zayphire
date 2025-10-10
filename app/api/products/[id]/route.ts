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
  const id = (await params).id;

  try {
    const formData = await req.formData();

    // ✅ Get both arrays from FormData
    const existingImages = formData.getAll("existingImages") as string[];
    const newFiles = formData.getAll("newImages") as File[];
    const uploadedImages: string[] = [];

    // ✅ Upload new images to Cloudinary
    if (newFiles && newFiles.length > 0 && newFiles[0] instanceof File) {
      for (const file of newFiles) {
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

    // ✅ Combine remaining + newly uploaded images
    const finalImages = [...existingImages, ...uploadedImages];

    // ✅ Convert FormData → object for updating other fields
    const updateFields: any = {};
    formData.forEach((value, key) => {
      if (key !== "existingImages" && key !== "newImages") {
        if (key === "price" || key === "discountPrice") updateFields[key] = Number(value);
        else if (
          key === "isSale" ||
          key === "inStock" ||
          key === "isNewArrival"
        )
          updateFields[key] = value === "true";
        else updateFields[key] = value;
      }
    });

    // ✅ Add final images array to update
    updateFields.images = finalImages;

    // ✅ Update product in MongoDB
    const product = await Product.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

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
