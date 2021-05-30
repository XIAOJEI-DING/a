
const mysql = require('mysql');
 
// 数据库配置
module.exports = {
    config: {
        host: "localhost",
        port: "3306",
        user: "root",
        password: "123456",
        database: "node"
    },
    // 连接数据库，使用连接池的方式
    // 连接池对象
    sqlConnect: function (sql, sqlArr, callback) {
        var pool = mysql.createPool(this.config);
        pool.getConnection((err, conn) => {
            console.log("数据库连接池");
            if (err) {
                console.log("连接失败");
                return;
            } else {
                console.log("连接成功...");
            }
            // 事件驱动回调
            conn.query(sql, sqlArr, callback);
            // 释放连接
            conn.release();
        })
    }
}

