
import express from 'express';

const router = express.Router();
import userRegister from "../controllers/user.controller.js"
router.get("/register",userRegister);


router.get("/register-1",async(req,res,next)=>{
    res.send("register")
})

export default router