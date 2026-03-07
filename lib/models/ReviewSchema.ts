import mongoose, { Schema, models, model } from "mongoose";

const Reviews = new Schema(
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const ReviewSchema =
  models.Review || model("Review", Reviews);