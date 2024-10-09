import { Schema, model } from "mongoose";

const keyShellsSchema = new Schema({
    productName:{type:String,required:true},
    productPrice:{type:String,required:true},
    productDescription:{type:String,required:true},
    productImageUrl:{type:String,required:true},
    productQuantity:{type:String,required:true}
},{timestamps:true})

export const KeyShellModel = model("keyshell",keyShellsSchema)