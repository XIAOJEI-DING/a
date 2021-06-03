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


router.get('/', function (req, res) {
    connection.query("select * from good ORDER BY id DESC", function (err, results, fields) {
      res.render('product', {
        data: results
      })
    })
  });
  

//显示增加商品的页面
router.get('/productadd',function(req,res){
    res.render('productadd');

});



router.post('/productadd', (req, res) => {
let user = {
  'title': req.body.title,
  'img': req.body.img,
  'price': parseFloat(req.body.price),
  'fee': parseFloat(req.body.fee),
  'description': req.body.description,
};
console.log(user);
  let sql = `insert into good(title,img,good_price,fee,description) values('${user.title}','${user.img}','${user.price}','${user.fee}','${user.description}')  `
  connection.query(sql, (err, result, fields) => {
    if(err) throw err;
    res.redirect('/product');
    console.log(result);
  })
});

router.post('/find',function(req,res){
  let title = req.body.title1
  connection.query(`select * from good where title like '%${title}%'`,function(err,results) {
    console.log(results);
    res.render("product",{data:results})
  })
})

router.delete('/del/:id',(req,res) =>{
  let sql = `delete from good where id = ${req.params.id} `
  connection.query(sql,(err,results)=>{
    res.send('success')
  })
})

router.get('/update/:id', (req, res) => {
  let sqlStr = `SELECT * FROM good WHERE id ="${req.params.id}" `
    connection.query(sqlStr, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.render("update", { data: result})
  })
})

router.post('/update/:id', (req, res) => {

  let user = {
    'title': req.body.title,
    'img': req.body.img,
    'price': parseFloat(req.body.price),
    'fee': parseFloat(req.body.fee),
    'description': req.body.description,
  };
  console.log(user)
    let sqlStr1 =`update good set title='${user.title}',img='${user.img}',good_price='${user.price}',fee='${user.fee}',description='${user.description}'where id='${req.params.id}'`
  console.log(req.params.id);
 connection.query(sqlStr1, (err, result) => {
        if(err) throw err;
          res.redirect('/product')
      })
  })

module.exports = router;