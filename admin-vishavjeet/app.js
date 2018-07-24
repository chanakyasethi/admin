var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
var cluster = require('cluster');
const { mongoose } = require('./config/mongoose');
const request = require('request');
// const externalCalls = require('externalcalls');

var index = require('./routes/index');
var users = require('./routes/users');
var tests = require('./routes/tests');
var result = require('./routes/result');
var group = require('./routes/group');
const config = require('./config/config');

var app = express();

//Saving external calls
// externalCalls(request, mongoose);

// view engine setup

// app.set('views', path.join(__dirname, 'pubic'));
// app.set('view engine', 'jade');

// view engine setup
app.use(express.static(path.join(__dirname, 'pubic')));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// CORS support

app.use(cors());


if (config.DEV_ENVIRONMENT == 'true') {
  app.use(cors({
    credentials: true,
    origin: 'http://localhost:4200'
  }));
}

//Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/', index);
app.use('/users', users);
app.use('/tests', passport.authenticate('jwt', { session: false }), tests);
app.use('/group', group);
app.use('/result', passport.authenticate('jwt', { session: false }), result);

// To render front end
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'pubic/index.html'));
});


// catch 404 and forward to error handler
 
app.use(function (req, res, next) {
 
  var err = new Error('Not Found');
 
   err.status = 404;
 
   next(err);
 
  });

// error handler
app.use(function (err, req, res, next) {
  console.log("mjdnsdjn");
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    success: false,
    msg: err.message || 'Something went wrong! Kindly reload the page'
  });
});



module.exports = app;