// 首页，默认页
// import { Router } from 'express';
const express=require('express');
const router=express.Router();
 
router.get('/',function(req,res){
  res.send('index');
})
 
router.get('/product',function(req,res){
  res.send('product页面');
})
 
module.exports= router;