import { Schema, model } from "mongoose";

const SmartKeySchema = new Schema({
  productName: { type: String, required: true },
  productPrice: {
    type: Number,
    required: true,
    min: [5000, "Smart key price should be above 5000"],
  },
  productDescription: { type: String, required: true },
  productImageUrl: { type: String, required: true },
  productQuantity:{type:String,required:true,min:[0,"Stock quantity can't be below 0"]}
},{timestamps:true});

export const SmartKeyModel = model("Smartkey",SmartKeySchema)
