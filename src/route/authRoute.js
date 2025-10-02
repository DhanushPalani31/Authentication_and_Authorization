import { getUserInfo, LoginUser, RegisterUser } from "../controller/userController.js"
import express from "express"
import { verifyToken } from "../middleware/verifyToken.js";
export const router=express.Router();
router.post("/auth/register",RegisterUser)
router.post("/auth/login",LoginUser)
router.get("/user/info",verifyToken,getUserInfo)