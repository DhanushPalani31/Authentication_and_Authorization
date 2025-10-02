import mongoose from "mongoose";
import dotenv from "dotenv" 

dotenv.config()

const Register=new mongoose.Schema({
    username:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})

export const RegisterSchema=mongoose.model("RegisterSchema",Register)