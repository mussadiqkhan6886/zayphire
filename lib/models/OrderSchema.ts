import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const orderSchema = new Schema(
  {
    orderId: { type: String, default: () => uuidv4() },

    items: [
      {
        // product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
        productId: {type:String, required: true},
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
        images: [{type: String}]
      },
    ],

    totalPrice: { type: Number, required: true },
    userDetails: {
      fullName: {type: String, required: true},
      phone: {type: String, required: true},
      email: {type: String, required: true}
    },
    notes: {type: String},
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },

    shippingAddress: {
      city: { type: String },
      postalCode: { type: String },
      address: {type: String, required: true}
    },

    paymentMethod: {
      type: String,
      default: "COD",
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order ||
  mongoose.model("Order", orderSchema);
