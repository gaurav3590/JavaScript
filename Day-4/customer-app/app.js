var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//var session = require('express-session')
var session = require('cookie-session')

var indexRouter = require('./routes/index');
var securePagesRouter = require('./routes/secureIndex');
var usersRouter = require('./routes/users');
var customerAPIRouter = require('./routes/api-customer');
var apiPersonRouter = require('./routes/api-person');

var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

var sess = {
  secret: 'keyboard cat',
  cookie: {},
  proxy: true,
  resave: true,
  saveUninitialized: true
}
app.use(session(sess));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); // /users   //public
app.use('/users', usersRouter); // /   // public

app.use((req, res, next) => {
  console.log(" security point");
  if (typeof (req.session.user) == 'string') {
    console.log("username :" + req.session.user);
    next();
  } else if (req.url.startsWith("/api")) {
    res.send({ result: "fail", msg: "you do not have access to api" })
  } else {
    res.redirect("/login");
  }
})

app.use('/', securePagesRouter); // /users   //public
app.use('/api/customer', customerAPIRouter); //secure
app.use('/api/person', apiPersonRouter); // secure

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
