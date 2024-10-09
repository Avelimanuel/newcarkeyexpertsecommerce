import { Schema,model } from "mongoose";

const keycoverSchema = new Schema({
    productName: {type:String,required:true},
    productPrice:{type:Number,required:true,min:[1000,"Price can't be lower than ksh.1000"]},
    productDescription: { type: String, required: true },
    productImageUrl: { type: String, required: true },
    productQuantity:{type:String,required:true,min:[0,"Stock quantity can't be below 0"]}
},{timestamps:true})

export const keyCoverModel = model("Keycover",keycoverSchema)
