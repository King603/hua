// import { Router } from 'express';
const express = require('express');
var router=express.Router();
router.get('/',function(req,res,next){
  res.send("商品页面");
})
module.exports= router;