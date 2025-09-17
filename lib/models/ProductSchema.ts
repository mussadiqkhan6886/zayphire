import mongoose, { Schema } from "mongoose";

{img: "/main (1).jpg", id:"11313", price: 5999, color: 4, gender: "men", quantity: 1, category: "men-new", description: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab corporis recusandae voluptatibus voluptate, laboriosam quibusdam excepturi adipisci corrupti enim similique modi accusamus consectetur sit placeat necessitatibus. Ex exercitationem aspernatur tempora.", name: "New Fabric", sale: true, newPrice: 1000},
const ProductSchema = new Schema({
       img: {
        type: String,
        require,
       },
       price: {
        type: Number,
        require,
       },
       color: {
        type: Number,
        require,
       },
       gender: {
        type: String,
        require
       },
       category: {
        type: String,
        require
       },
       description: {
        type: String,
        require
       }
        
    },
    {timestamps: true}
)

const Product = ProductSchema.models("product") || mongoose.model("product", ProductSchema)

export default Product