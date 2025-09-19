import mongoose, { Schema } from "mongoose";

// export interface IProduct extends Document {
//   name: string;
//   slug: string; // SEO-friendly URL (e.g., "discovery-box")
//   description: string;
//   price: number;
//   discountPrice?: number; // optional if product has a discount
//   category: string;
//   subCategory?: string;
//   brand?: string;
//   stock: number;
//   images: string[]; // multiple product images
//   thumbnail: string; // main display image
//   sizes?: string[]; // if applicable (S, M, L, XL)
//   colors?: string[]; // color options
//   tags?: string[]; // for search/filter
//   gender?: "men" | "women" | "unisex"; // clothing/fashion
//   collection?: string; // e.g., "Summer 2025"
//   isFeatured: boolean;
//   isNewArrival: boolean;
//   ratings: {
//     average: number;
//     count: number;
//   };
//   reviews: mongoose.Types.ObjectId[]; // ref to Review model
//   createdAt: Date;
//   updatedAt: Date;
// }

const productSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    category: { type: String, required: true },
    brand: { type: String },
    stock: { type: Number, default: 0 },
    images: [{ type: String, required: true }],
    thumbnail: { type: String, required: true },
    color: { type: String, required:  true },
    gender: { type: String, enum: ["men", "women", "unisex"], required:  true },
    collection: { type: String, required:  true },
    isNewArrival: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
