let express=require('express');
let router=express.Router();
let  mysql = require('mysql');
var md5=require('md5');

router.get('/',(req,res)=>{
    res.render('login')
});
router.post("/",function(req,res){    //    获取登录传过来的值
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
        console.log(md5(req.body.b));
    });
    var sql="select user_name,user_pw from user where user_name='"+req.body.a+"' and user_pw='"+md5(req.body.b)+"'";    //    在数据库里面查询用户名跟密码
    connection.query(sql,function(err,result){   
        if(err){
            res.end("登录失败");  
            console.log(err);
        }
        if(result.length==0){    
          res.json("用户名密码不正确");   
        }else{
            res.redirect('/index');
        }
    })
   
});
  
module.exports=router;