import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const URI=process.env.URI

export const  connectDB=()=>{
    mongoose.connect(URI).then(()=>{
        console.log("DB  connected")
    })
    .catch(err=>{
        console.log(err)
    })
}