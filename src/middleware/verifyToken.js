import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const verifyToken=(req,res,next)=>{
    try{
        const authHeader=req.headers.authorization
        if(!authHeader){
            return res.status(401).json({ message: "Access denied. No token provided." })
        }
        const token=authHeader.split(" ")[1]
        if(!token){
            return res.status(401).json({ message: "Access denied. Token missing." });
        }

        const decode=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decode
        next()
    }
    catch(err){
      console.error(err);
    res.status(401).json({ message: "Invalid token" });
    }
}