//开启严格模式
"use strict";
//导入自制封装好的ajax
import my_AJAX from "./ajax.js";
function login() {
    var $uname = uname.value;
    var $upwd = upwd.value;
    if (!$uname) {
        alert("用户名不存在");
        return;
    }
    if (!$upwd) {
        alert("密码不存在");
        return;
    }
    var data = $uname + "&" + $upwd;
    my_AJAX("/user/V1/login/", "get", (result) => {
        if (result == "1") alert("登陆成功");
        else if (result == "0") alert("登入失败");
        else alert("未接收到用户信息")
    }, data);

}