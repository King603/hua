
// import express from 'express';
const express = require('express');
//引入模块
// import admin from './routes/admin.js';
const admin = require('./routes/admin.js');//路由，后台
// import index from './routes/index.js';
const index = require('./routes/index.js');//路由，首页
const app = express();

app.use('/', index);//挂在路由，如果没有路由，或者只有/ ,映射到index路由；
app.use('/admin', admin);//挂在路由，/admin映射到admin


var server = app.listen(8080, '127.0.0.1', (req, res, next) => {
  var host = server.address().address;
  var port = server.address().port;
});