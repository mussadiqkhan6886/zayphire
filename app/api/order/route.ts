import { connectDB } from "@/lib/config/database";
import OrderSchema from "@/lib/models/OrderSchema"
import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

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

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail
    pass: process.env.EMAIL_APP_PASSWORD, // Your Gmail App Password
  },
});

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const res = await OrderSchema.create(data);

    // Prepare Email HTML
    const orderItemsHtml = data.items.map((item: any) => `
      <tr>
        <td style="padding: 10px; border-bottom: 1px solid #eee;">
          <img src="${item.images?.[0]}" width="50" style="vertical-align: middle; margin-right: 10px; border-radius: 4px;"/>
          <strong>${item.name}</strong> (x${item.quantity})
        </td>
        <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">PKR ${item.price}</td>
      </tr>
    `).join("");

    const emailTemplate = (isForAdmin: boolean) => `
      <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
        <h2 style="color: #1a1a1a; text-align: center; border-bottom: 2px solid #f4f4f4; padding-bottom: 10px;">
          ${isForAdmin ? "New Order Received" : "Thank You For Your Order!"}
        </h2>
        <p>Order ID: <strong>#${res.orderId.slice(0,6)}</strong></p>
        
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <thead>
            <tr style="background: #f9f9f9;">
              <th style="text-align: left; padding: 10px;">Item</th>
              <th style="text-align: right; padding: 10px;">Price</th>
            </tr>
          </thead>
          <tbody>${orderItemsHtml}</tbody>
        </table>

        <div style="text-align: right; font-size: 1.2rem; font-weight: bold;">
          Total Paid: PKR ${data.totalPrice}
        </div>

        <div style="margin-top: 30px; padding: 15px; background: #f4f4f4; border-radius: 8px;">
          <h4 style="margin: 0 0 10px 0;">Shipping Details</h4>
          <p style="margin: 2px 0;"><strong>Name:</strong> ${data.userDetails.fullName}</p>
          <p style="margin: 2px 0;"><strong>Phone:</strong> ${data.userDetails.phone}</p>
          <p style="margin: 2px 0;"><strong>Address:</strong> ${data.shippingAddress.address}, ${data.shippingAddress.city}</p>
          ${data.notes ? `<p style="margin: 2px 0;"><strong>Notes:</strong> ${data.notes}</p>` : ""}
        </div>
      </div>
    `;

    // 1. Send to Admin
    await transporter.sendMail({
      from: `"Store Admin" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, 
      subject: `🚨 New Order #${res.orderId.slice(0,6)}`,
      html: emailTemplate(true),
    });

    // 2. Send to Customer
    await transporter.sendMail({
      from: `"Our Store" <${process.env.EMAIL_USER}>`,
      to: data.userDetails.email,
      subject: `Order Confirmed - #${res.orderId.slice(0,6)}`,
      html: emailTemplate(false),
    });

    return NextResponse.json({ success: true, order: res }, { status: 201 });

  } catch (err: any) {
    console.error("Order Error:", err);
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
};
