import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const productSchema = new Schema(
  {
    productId: { type: String, default: () => uuidv4() },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    isSale: { type: Boolean, default: false },
    discountPrice: { type: Number },
    category: { type: String, required: true },
    brand: { type: String },
    inStock: { type: Boolean, default: true },
    images: [{ type: String, required: true }],
    color: { type: String },
    season: { type: String },
    gender: { type: String, enum: ["men", "women", "unisex"], required: true },
    isNewArrival: { type: Boolean, default: true },
    type: { type: String, default: "Unstitched" },
    length: { type: String },
    fragranceType: { type: String },
    material: { type: String },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
