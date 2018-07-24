const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const { mongoose } = require('./config/database');
const response = require('./routes/response');
const users = require('./routes/users');
const tests = require('./routes/tests');
const config = require('./config/config');
const request = require('request');

const app = express();
app.use(cors());

// const externalCalls = require('externalcalls');
//Saving external calls
// externalCalls(request, mongoose);

app.use(express.static(path.join(__dirname, 'public')));
// view engine setup
// app.set('view engine', 'jade');

// if angular
// if (config.DEV_ENVIRONMENT == 'true') {
//   app.use(cors({ credentials: true }));
// }
app.use(bodyParser.json({ limit: '50mb' }));
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.use('/tests',
  passport.authenticate('jwt', { session: false }), tests);

app.use('/response', passport.authenticate('jwt', { session: false }),
  response);

// To render front end
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// app.get('/', (req, res) => {
//   res.send('Invalid EndPoint');
// });


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Route Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
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
