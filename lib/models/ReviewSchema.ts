import mongoose, { Schema, models, model } from "mongoose";

const ReviewSchema = new Schema( // Renamed for clarity: this is the blueprint
  {
    name: { type: String, required: true },
    message: { type: String, required: true },
  },
  { 
    timestamps: true 
  }
);

// We check if the model exists; if not, we create it.
// We export it as 'Review' to follow standard naming conventions.
export const Review = mongoose.models.Review || mongoose.model("Review", ReviewSchema);