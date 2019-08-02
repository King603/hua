//开启严格模式
"use strict";
//导入自制封装好的ajax
import my_AJAX from "./ajax.js";
function user_reg() {
    var $uname = uname.value;
    var $upwd = upwd.value;
    if ($upwd.lengyh < 6) {
        alert("密码小于6位，请重新输入");
        return;
    }
    if ($upwd !== cupwd.value) {
        alert("验证失败，请重新输入");
        return;
    }
    var $email = email.value;
    var $phone = phone.value;
    var data = $uname + "&" + $upwd + "&" + $email + "&" + $phone;
    my_AJAX("/user/V1/reg/", "post", (result) => {
        if (result == 1) alert("注册成功");
        else if (result == 0) alert("注册失败");
        else alert("未接收用户信息");
    }, data);
}