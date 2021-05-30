let express=require('express');
let router =express.Router();
var events = require('events');
var emitter = new events.EventEmitter();
let User=require('./bean/user');
let  mysql = require('mysql');
var md5=require('md5');


var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"node"
});
//    连接数据库
connection.connect( err =>{
    if(err) throw err;
    console.log('Mysql连接成功');
});

router.get('/',(req,res)=>{
    res.render('register');
})
router.post("/",function(req,res){   
    //    监听数据库写入返回的参数
    emitter.on("ok",function(){
        return res.end("注册成功");    //    向前台返回数据
    });
    emitter.on("false",function(){
        return res.end("用户名已存在");    //    向前台返回数据
    });

    var sql="insert into user(user_name,user_pw,other_name,user_id,user_email,user_tel) values(?,?,?,?,?,?)";
    var sqlValue=[req.body.user_name,md5(req.body.user_pw),req.body.other_name,req.body.user_id,req.body.user_email,req.body.user_tel];
    connection.query(sql,sqlValue,function(err){   
        if(err){
            console.log(err.message);    //    输出数据库错误信息
            emitter.emit("false");    //    返回失败
        }
        emitter.emit("ok");    //    返回成功
    });    //    关闭数据库
    res.redirect("/");
  });


module.exports=router;