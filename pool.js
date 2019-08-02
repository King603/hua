//开启严格模式
"use strict";
//引入MySQL模块
import { createPool } from "mysql";
//创建连接池
var pool=createPool({
    host:"127.0.0.1",
    post:"3306",
    user:"root",
    password:"",
    database:"xhw",
    connectionLimit:20
});
//冻结
Object.freeze(pool);
//导出链接池数据
export default pool;