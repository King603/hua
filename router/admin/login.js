// import { Router } from 'express';
const express = require('express');
const router=express.Router();
router.get('/',function(req,res,next){
  res.send("登陆页面");
});
router.post("/dologin",(req,res)=>{
  res.send("admin user");
});
module.exports= router;