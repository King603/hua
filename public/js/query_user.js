//开启严格模式
"use strict";
//导入自制封装好的ajax
import my_AJAX from "./ajax.js";
function update() {
    var $uid = uid.value;
    var $uname = uname.value;
    var $upwd = upwd.value;
    var $email = email.value;
    var $phone = phone.value;
    var $user_name = user_name.value;
    var gender = null;
    if (m.checked) gender = "1";
    else if (f.checked) gender = "0";
    var data="uid=" + $uid + "&uname=" + $uname + "&upwd=" + $upwd + "&email=" + $email + "&phone=" + $phone + "&user_name=" + $user_name + "&gender=" + gender;
    my_AJAX("/user/V1/update/", "put", (result) => {
        if (result == 1) {
            alert("修改成功");
            location.href = "http://127.0.0.1:8080/user_list.html";
        } else alert("修改失败");
    }, data);
}
function query() {
    var urlParmas = new URLSearchParams(location.search);
    var $uid = urlParmas.get("uid");
    uid.value = $uid;
    my_AJAX("/user/V1/queryuser/", "get", (result) => {
        var user = JSON.parse(result)[0];
        uname.value = user.uname;
        upwd.value = user.upwd;
        email.value = user.email;
        phone.value = user.phone;
        user_name.value = user.user_name;
        if (user.gender == 1) m.checked = true;
        else if (user.gender == 0) f.checked = true;
        else un.checked = true;
    }, $uid);
}