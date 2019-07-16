//导入express模块
const express=requier("express");
//导入body-parser模块
const bodyParser=require("body-parser");
//导入user路由模块
const userRouter=require("./router/user.js");
//设置web服务器
var app=express();
//监听端口
app.listen(8080);
//设置静态托管文件夹
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended:false
}));
//使用路由器，挂载到/user下
app.use("/user",userRouter);