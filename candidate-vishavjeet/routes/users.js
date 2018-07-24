const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();
const request = require('request');
const mongoose = require('mongoose');

const config = require('../config/config');
const util = require('../utility/utility');
var userRoute = config.USER_SERVICE_PORT + '/user/';

const app = 'candidate';
//--------------------------------------------
//+++++++++++++++++++++++++++++++++++++++++++
//-------------------------------------------

const winston = require('../logger').logger;
var multifile = (config.multiFileLog == 'true');
var process = require('process');
var pid = "";
if (!multifile) {
  pid = process.pid;
}
//-----------------------------------------
// Recaptcha save
//-----------------------------------------

router.post('/subscribe', (req, res) => {
  if (
    req.body.captcha === undefined ||
    req.body.captcha === '' ||
    req.body.captcha === null
  ) {
    return res.json({ success: false, msg: 'Please Select Captcha' });
  }
  //secret key
  const secretkey = '6LeCV0QUAAAAAOYeMz2oSxax1kWsJF5i2kTYtFqx';

  //verifyurl

  const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretkey}&response=${
    req.body.captcha
    }&remoteip=${req.connection.remoteAddress}`;

  //make request to verify url

  request.post(verifyUrl, (err, response, body) => {
    body = JSON.parse(body);

    //if not successful
    if ((body.success !== undefined) & !body.success) {
      res.json({
        success: false,
        msg: 'Failed Captcha Verification'
      });
    }

    //if success
    res.json({
      success: true,
      msg: 'Captcha Verified'
    });
  });
});


//-----------------------------------------
//     save user details to database
//-----------------------------------------
router.post('/register', (req, res, next) => {
  request.post(
    {
      headers: { app: app },
      url: userRoute + 'register',
      body: req.body,
      json: true
    },
    function (err, response, body) {

      if (err) {
        winston.error(`\nError Message: - ${pid} --${err.stack}`);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      }
      else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nuser registered\n')
            winston.debug('-' + pid + '--' + '\n registered user : ' + response.body + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});



//--------------------------------------------
//      Activate user for login
//--------------------------------------------
router.put('/newlink', (req, res, next) => {
  // console.log(req.body);
  request.put(
    {
      headers: { app: app },
      url: userRoute + 'newlink',
      body: req.body,
      json: true
    },
    function (err, response, body) {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message: - ${pid} --${err.stack}`);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });

      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nnew activation link send\n')
            winston.debug('-' + pid + '--' + '\nnew activation link send:' + response.body + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});




//--------------------------------------------
//      Activate user for login
//--------------------------------------------
router.put('/activate/:token', (req, res, next) => {
  request.put(
    {
      headers: { app: app },
      url: userRoute + 'activate/' + req.params.token
    },
    function (err, response, body) {
      if (err) {

        winston.error(`\nError Message: - ${pid} --${err.stack}`);

        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      }
      else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\naccount activated\n')
            winston.debug('-' + pid + '--' + '\naccount activated' + response.body + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});



//--------------------------------------------
//       Authenticate user when login
//--------------------------------------------
router.post('/authenticate', (req, res, next) => {
  // console.log("////////////////////////////////////");
  request.post(
    {
      headers: { app: app },
      url: userRoute + 'authenticate',
      body: req.body,
      json: true
    },
    function (err, response, body) {

      if (err) {

        winston.error(`\nError Message: - ${pid} --${err.stack}`);

        // res.send(err);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });

      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            console.log("process id is", pid);
            winston.info('-' + pid + '--' + '\nyou are now logged in\n')
            winston.debug('-' + pid + '--' + '\nyou are logged in now' + response.body + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});

//-------------------------------------------
//          forgot password
//-------------------------------------------
router.put('/resetpassword', (req, res, next) => {
  request.put(
    {
      headers: { app: app },
      url: userRoute + 'resetpassword',
      body: req.body,
      json: true
    },
    function (err, response, body) {
      if (err) {

        winston.error(`\nError Message: - ${pid} --${err.stack}`);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });

      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nEmail link send for password change\n')
            winston.debug('-' + pid + '--' + '\n' + response.body + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});

//------------------------------------------------------------------
//      to identify the correct user for resetting password
//------------------------------------------------------------------
router.get('/resetpassword/:token', (req, res, next) => {
  // console.log('kkkk : ' + req.params.token);
  request.get(
    {
      headers: { app: app },
      url: userRoute + 'resetpassword/' + req.params.token
    },
    function (err, response, body) {
      if (err) {

        winston.error(`\nError Message: - ${pid} --${err.stack}`);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });

      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\ncorrect user\n')
            winston.debug('-' + pid + '--' + '\n correct user' + response.body + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});

//------------------------------------------
//          save new password
//------------------------------------------
router.put('/savepassword', function (req, res) {
  const type = 'candidate';
  request.put(
    {
      headers: { app: app },
      url: userRoute + 'savepassword',
      body: req.body,
      json: true
    },
    function (err, response, body) {
      if (err) {

        winston.error(`\nError Message: - ${pid} --${err.stack}`);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });

      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nPassword has been reset\n')
            winston.debug('-' + pid + '--' + '\n Password set' + response.body + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});

// =======================================================
//  GET USER PROFILE
// =======================================================
router.get('/getuserprofile/:id', function (req, res) {

  request.get(
    {
      headers: { app: app },
      url: userRoute + 'getusrprofile/' + req.params.id,
      json: true
    },
    function (err, response, body) {
      if (err) {
        winston.error(`\nError Message: - ${pid} --${err.stack}`);
        return res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      }
      return res.json(response.body);
    }
  );
});
//=======================================================
//  UPDATE USER PROFILE
//=======================================================
router.put('/updateuserprofile', function (req, res) {

  request.put(
    {
      headers: { app: app },
      url: userRoute + 'updateusrprofile',
      body: req.body,
      json: true

    }, function (err, response, body) {
      if (err) {
        winston.error(`\nError Message: - ${pid} --${err.stack}`);
        return res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      }
      return res.json(response.body);
    }
  );
});


module.exports = router;
