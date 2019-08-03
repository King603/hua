import express from "express";
import router from "../router/user";
var rouder=express.Router();
router.get("/",(req,res,next)=>{
    res.send("用户界面")
});
export default rouder;