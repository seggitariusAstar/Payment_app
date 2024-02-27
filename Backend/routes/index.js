const express=require("express")
const router=express.Router();
const userRouter=require("./user");
const Accountrouter=require("./account")
router.use("/account",Accountrouter)
router.use("/user",userRouter)

module.exports=router