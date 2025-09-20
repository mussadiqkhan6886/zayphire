import mongoose, { Schema } from "mongoose";


const productSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    category: { type: String, required: true },
    brand: { type: String },
    inStock: { type: Boolean, default: true },
    images: [{ type: String, required: true }],
    color: { type: String, required:  true },
    gender: { type: String, enum: ["men", "women", "unisex"], required:  true },
    isNewArrival: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
