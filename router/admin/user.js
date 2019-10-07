// import express from "express";
const express = require('express');
// import router from "../router/user";
const router=require("../user.js");
var rouder = express.Router();
router.get("/", (req, res, next) => {
    res.send("用户界面")
});
module.exports = rouder;