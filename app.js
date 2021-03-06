var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs=require('ejs');
var session=require('express-session');
var multiparty = require('multiparty');

var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var indexRouter = require('./routes/index');
var categoryRouter=require('./routes/index');
var singleproductRouter=require('./routes/index');
var manageRouter=require('./routes/manage');
var login1Router = require('./routes/login1');
// var cartRouter = require('./routes/index');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("keyboard cat"));
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {
      maxAge:1000*60*30
  },
  saveUninitialized: true,
}))

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/register', registerRouter);
app.use('/index',indexRouter);
app.use('/product',manageRouter);
app.use('/login1', login1Router);
// app.use('/category',categoryRouter);
app.use('/single-product',singleproductRouter);
// app.use('/cart',cartRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
