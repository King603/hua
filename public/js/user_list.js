//开启严格模式
"use strict";
//导入自制封装好的ajax
import my_AJAX from "./ajax.js";
function show() {
    my_AJAX("/user/V1/list", "get", (result) => {
        //json解析，解析结果是一个对象数组
        var arr = JSON.parse(result);
        var htmlstr = `
            <table border="1px" width="800px">
                <tr>
                    <th>登录名称</th>
                    <th>电子邮件</th>
                    <th>联系方式</th>
                    <th>用户姓名</th>
                    <th>用户性别</th>
                    <th>操作</th>
                </tr>
        `;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].gender == 1) var gender = "男";
            else if (arr[i].gender == 0) var gender = "女";
            else var gender = "保密";
            htmlstr += `
                <tr>
                    <td>${arr[i].uname}</td>
                    <td>${arr[i].email}</td>
                    <td>${arr[i].phone}</td>
                    <td>${arr[i].user_name}</td>
                    <td>${gender}</td>
                    <td>
                        <a href="javascript:deleteUser(${arr[i].uid})">删除</a>
                        <a href="query_user.html?uid=${arr[i].uid}">修改</a>
                    </td>
                </tr>	
            `;
        }
        htmlstr += `</table>`;
        d1.innerHTML = htmlstr;
    });
}
function deleteUser($uid) {
    my_AJAX("/user/V1/deluser/", "delete", () => {
        if (result == 1) {
            alert("删除成功");
            show();
        } else alert("删除失败");
    }, $uid);
}