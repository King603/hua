//开启严格模式
"use strict";
//引入express模块
// import { Router } from "express";
const express = require("express");
//引入连接池数据
// import { query } from "../pool.js";
const pool = require("../pool.js");
const query = pool.query();
//创建路由对象
var router = express.Router();
//添加路由
//1.注册路由
router.post("/V1/reg", (req, res) => {
    //获取数据
    var obj = req.body;
    //执行SQL语句
    var sql = "insert into xhw_user set ?";
    query(sql, [obj], (err, result) => {
        if (err) throw err;
        if (result.affectedRows > 0) res.send("1");
        else res.send("0");
    });
});
//2.登录路由
router.get("/V1/login/:uname&:upwd", (req, res) => {
    //获取用户名和密码
    var obj = req.params;
    //查询数据库，返回响应
    var sql = "select * from xhw_user where uname=? and upwd=?";
    query(sql, [obj.uname, obj.upwd], (err, result) => {
        if (err) throw err;
        if (result.length > 0) res.send("1");
        else res.send("0");
    });
});
//3.用户列表
router.get("/V1/list", (req, res) => {
    //执行SQL语句
    var sql = "select * from xhw_user";
    query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
//4.删除用户
router.delete("/V1/deluser/:uid", (req, res) => {
    //获取用户编号
    var $uid = req.params.uid;
    if (!$uid) {
        res.send("未找到");
        return;
    }
    //执行SQL语句
    var sql = "delete from xhw_user where uid=?";
    query(sql, [$uid], (err, result) => {
        if (err) throw err;
        res.send("1");
    });
});
//5.查询用户
router.get("/V1/queryuser/:uid", (req, res) => {
    //获取用户编号
    var $uid = req.params.uid;
    //查询数据库，返回响应
    var sql = "select * from xhw_user where uid=?";
    query(sql, [$uid], (err, result) => {
        if (err) throw err;
        if (result.length > 0) res.send("1");
        else res.send("0");
    });
});
//6.修改用户信息
router.put("/V1/update", (req, res) => {
    var obj = req.body;
    var $uid = obj.uid;
    delete obj.uid;
    var sql = "update xhw_user set ? where uid = ?";
    query(sql, [odj, $uid], (err, result) => {
        if (err) throw err;
        res.send("1");
    });
});
//导出路由器模块
module.exports = router;