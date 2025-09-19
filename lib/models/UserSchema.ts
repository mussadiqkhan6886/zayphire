import { Schema, model, InferSchemaType } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
}, { timestamps: true });

type UserType = InferSchemaType<typeof userSchema>; // 👈 auto types

export default model<UserType>("User", userSchema);
