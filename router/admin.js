/**
******后台
*/
// import { Router } from 'express';
const express = require('express');
const router = express.Router();//
// import login from './admin/login.js';
const login = require('./admin/login.js');//路由，登陆
// import product from './admin/product.js';
const product = require('./admin/product.js');//路由，商品
// import user from './admin/user.js';
const user = require('./admin/user.js');//路由，用户

router.use('/login', login);//   /login 映射到login这个路由
router.use('/product', product);//   /product  映射到product这个路由
router.use('/user', user);
//如果login  product user  不存在，则会走下面这个
router.use("/", function (req, res) {
  res.send("admin/");
})

module, exports = router;//暴露模块
