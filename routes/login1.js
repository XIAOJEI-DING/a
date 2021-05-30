var express = require('express');
var router = express.Router();

var mysql = require("mysql");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  port: "3306",
  database: "node"
});
router.get('/',function(req,res){
  res.render('login1');

});
router.post('/doLogin',async (req,res)=>{
  var username=req.body.username;
  var password=req.body.password;

 
  var sql = `select username,password from administrator where username = '${username}' and password = '${password}'`;
  connection.query(sql, function (err, result) {
      console.log(result);
      // let result
      if(err) throw err;
      
      
      if (result =="") {
        res.render('demo', {
          title: "登录失败",
          content: "用户或密码错误",
          href: "/login1",
          hrefTxt: "登录页"
      })
      } else {
        req.session.username = username;
        res.render('demo', {
            title: "登录成功",
            content: "立即跳转至后台",
            href: "/product",
            hrefTxt: "后台"
        })
    }
})
})
router.get('/loginOut',function(req,res){


    //销毁session

    req.session.destroy(function(err){

        if(err){
            console.log(err);
        }else{
            res.redirect('/login1');
        }
    })
})
module.exports=router;