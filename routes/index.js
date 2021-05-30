var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var mysql = require("mysql");
var form = new multiparty.Form();

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  port: "3306",
  database: "node"
});

// router.get('/',(req,res)=>{
//     res.render('contact')
// });
router.get('/',(req,res)=>{
    res.render('index')
});
router.get('/category',(req,res)=>{
    connection.query("select * from good ORDER BY id DESC", function (err, results, fields) {
        res.render('category', {
          data: results
        })
      })
});
router.get('/single-product/:id',(req,res)=>{
    connection.query(`SELECT * FROM good WHERE id ="${req.params.id}" `, function (err, results, fields) {
        res.render('single-product', {
          data: results
        })
      })
});
router.get('/checkout',(req,res)=>{
    res.render('checkout')
});
router.get('/cart',(req,res)=>{
    res.render('cart')
});
router.get('/confirmation',(req,res)=>{
    res.render('confirmation')
});


router.get('/login'),(req,res)=>{
    res.render('login')
};
// router.get('/',(req,res)=>{
//     res.render('single-product')
// });router.get('/', function (req, res) {
 router.post('/category/find',function(req,res){
        let title = req.body.title1
        connection.query(`select * from good where title like '%${title}%'`,function(err,results) {
          console.log(results);
          res.render("category",{data:results})
        })
      })
 
module.exports=router;