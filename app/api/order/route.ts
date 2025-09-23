import { connectDB } from "@/lib/config/database";
import OrderSchema from "@/lib/models/OrderSchema"
import { NextRequest, NextResponse } from "next/server"


await connectDB()

export const GET = async () => {
  try {
    const res = await OrderSchema.find({});
    return NextResponse.json({ success: true, orders: res }, { status: 200 });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err },
      { status: 500 }
    );
  }
};


export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();

    // ✅ Create directly with data, no wrapping inside { data }
    const res = await OrderSchema.create(data);

    return NextResponse.json({ success: true, order: res }, { status: 201 });
  } catch (err: unknown) {
    return NextResponse.json(
      { success: false, message: err },
      { status: 500 }
    );
  }
};
