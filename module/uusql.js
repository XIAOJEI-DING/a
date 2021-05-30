var dbConfig = require('../module/db')
 
// 查
getgood = (req, res) => {
    var sql = "select * from good";
    var sqlArr = [];
    var callBack = (err, result) => {
      if(err) throw err;
        else {
            res.render('product',{

                data:result
            })
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
// 根据id查
getgoodId = (req, res) => {
    let title= req.query.title;
    var sql = 'select * from good where title like "?" '
    var sqlArr = [title];
    var callBack = (err, result) => {
        if (err) throw err;
        else {
            res.render('productedit',{
                       data:result
        })
        }}
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
// 增加
addgood = (req, res) => {
    let {id,title,img, price,fee,description } = req.body;

    console.log(req.body.id);
    var sql = "insert into good(id,title,img,good_price,fee,description) value (?,?,?,?,?,?)";
    var sqlArr = [id,title,img, price,fee,description];
    var callBack = (err, result) => {
        if (err) throw err;
         else {
            res.redirect('/product');
            
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
// 删除
// 增加
deletegood = (req, res) => {
    let id = req.params.id;
    let sql = 'delete from good where id = ?'
    let sqlArr = [id]
    var callBack = (err, result) => {
        if (err) throw err;
        
        else {
            res.redirect('/product');
           
        }
    }
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
// 修改
editgood = (req, res) => {
    console.log(111);
    let {title,img, price,fee,description,id} = req.body;
    let title=req.body.title;
    let img=req.body.img;
    let price=req.body.price;
    let fee=req.body.fee;
    let description=req.body.description;
    let id=req.query.id11;
    console.log(id);
    let sql = 'update good set title=?,img=?,good_price=?,fee=?,description=?where id=?'
    // var sql = "insert into students(id,title,img,good_price,fee,good_introduction) value (?,?,?,?,?,?)";
    var sqlArr = [title,img,price,fee,description,id];
    var callBack = (err, result) => {
         if (err) throw err;
         else {
             res.render('product',{data:result})
    }}
    dbConfig.sqlConnect(sql, sqlArr, callBack);
}
module.exports = {
    getgood,
    getgoodId,
    addgood,
    deletegood,
    editgood
}
