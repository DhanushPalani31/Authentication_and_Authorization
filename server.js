import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./src/config/db.js";
import { router } from "./src/route/authRoute.js";

dotenv.config();

const app=express()

app.use(express.json())

app.use("/api",router)

app.listen(process.env.PORT || 3000,()=>{
    console.log(`The port is running successfully on ${process.env.PORT}`)
    connectDB();
})