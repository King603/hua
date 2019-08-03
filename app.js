//导入express模块
import express, { static } from "express";
//导入body-parser模块
import { urlencoded } from "body-parser";
//导入user路由模块
import userRouter from "./router/user.js";
import admin from "./router/admin.js";
//import index from "./router/index.js";
//设置web服务器
var app=express();
//监听端口
app.listen(8080);
//设置静态托管文件夹
app.use(static("public"));
app.use(urlencoded({
    extended:false
}));
//使用路由器，挂载到/下
app.use("/",index);
//使用路由器，挂载到/user下
app.use("/user",userRouter);
//使用路由器，挂载到/admin下
app.use("/admin",admin);