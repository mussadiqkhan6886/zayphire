import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/config/cloudinary";
import Product from "@/lib/models/ProductSchema";
import { connectDB } from "@/lib/config/database";

export const runtime = "nodejs"; // Needed for Cloudinary

export async function POST(req: NextRequest) {
  await connectDB()
  try {
    const formData = await req.formData();

    // Extract text fields
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;
    const brand = formData.get("brand") as string
    const color = formData.get("color") as string
    const gender = formData.get("gender") as string
    const category = formData.get("category") as string
    const length = formData.get("length") as string
    const fragranceType = formData.get("fragranceType") as string
    const material = formData.get("material") as string

    // Extract files
    const files = formData.getAll("images") as File[];

    let uploadedImages: string[] = [];

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadRes = await new Promise<any>((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            { folder: "zayphire" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          )
          .end(buffer);
      });

      uploadedImages.push(uploadRes.secure_url);
    }

    const newProduct = await Product.create({
      name,
      price,
      description,
      color,
      brand,
      category,
      gender,
      length,
      fragranceType,
      material,
      images: uploadedImages,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Product uploaded successfully",
        data: newProduct
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Upload error:", err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
