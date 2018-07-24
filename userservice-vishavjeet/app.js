const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('./config/config');
const { mongoose } = require('./config/mongoose');
const passport = require('passport');
const index = require('./routes/index');
const user = require('./routes/user');
const requestValidator = require('./middlewares/requestValidator');
const request = require('request');
//const externalCalls = require('externalcalls');



const app = express();

//Saving external calls
// externalCalls(request, mongoose);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(requestValidator);
app.use('/', index);
app.use('/user', user);

require('./config/passport')(passport);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   if (err) {
//     // logger1.error(`\nError Message : ${err.stack}`);
//     console.log(err)
//   }
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   next();
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
