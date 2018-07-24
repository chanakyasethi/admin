// import { resolve } from 'path';

const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const http = require('http');
const request = require('request');
const _ = require('lodash');
const mongoose = require('mongoose');

const config = require('../config/config');
const util = require('../utility/utility');


var userRoute = config.USER_SERVICE_PORT + '/user/';
const app = 'admin';

const winston = require('../logger').logger;
var logging = (config.logging == 'true');
var multifile = (config.multiFileLog == 'true');
var process = require('process');
var pid = "";
if (!multifile) {
  pid = process.pid;
}


//----------------------------------------------
//---------------------------------------------
//recaptcha logic
//---------------------------------------------

router.post('/subscribe', (req, res) => {
  if (
    req.body.captcha === undefined ||
    req.body.captcha === '' ||
    req.body.captcha === null
  ) {
    return res.json({
      success: false,
      msg: 'Please Select Captcha'
    });
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
    if (err) {
      winston.error(`\nError Message : -${pid}-- ${err.stack} `);
    }
    //if not successful
    if ((body.success !== undefined) & !body.success) {
      winston.warn(`\n-${pid}-- Failed Captcha Verification\n`)
      res.json({
        success: false,
        msg: 'Failed Captcha Verification'
      });
    }

    //if success
    winston.info(`\n-${pid}-- captcha successfully verified\n`)
    res.json({
      success: true,
      msg: 'Captcha Verified'
    });
  });
});

//-----------------------------------------
//     save user details to database
//-----------------------------------------
router.post('/register', (req, res) => {
  request.post(
    {
      headers: {
        app: app
      },
      url: userRoute + 'register',
      body: req.body,
      json: true
    },
    function (err, response, body) {

      if (err) {
        // res.send(err);
        winston.error(`\nError Message : ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {

        util.responseFound(response, callback => {
          if (!callback) {
            winston.error(`-${pid}-- internal server: `, response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nuser rigistered\n')
            winston.debug('-' + pid + '--' + '\n registered user : ' + JSON.stringify(response.body) + '\n');
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
  // console.log('activated', req.params.token);
  request.put(
    {
      headers: {
        app: app
      },
      url: userRoute + 'activate/' + req.params.token
    },
    function (err, response, body) {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message : ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {

        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\naccount activated\n')
            winston.debug('-' + pid + '--' + '\n' + JSON.stringify(response.body) + '\n');
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
  // console.log('new from fe', req.body);
  request.put(
    {
      headers: {
        app: app
      },
      url: userRoute + 'newlink',
      body: req.body,
      json: true
    },
    function (err, response, body) {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message : ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {

        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nnew activation link send\n')
            winston.debug('-' + pid + '--' + '\n' + JSON.stringify(response.body) + '\n');
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
router.post('/authenticate', (req, res) => {
  // console.log('from front-end: ', req.body);
  request.post(
    {
      headers: {
        app: app
      },
      url: userRoute + 'authenticate',
      body: req.body,
      json: true
    },
    function (err, response) {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message : ${pid} --- ${err.stack} `);
        // console.log('error', err);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {

        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info(`\n-${pid}-- you are now logged in\n`)
            winston.debug(`\n${pid}-- + ${JSON.stringify(response.body)} + \n`);
            res.json(response.body);
          }
        });
      }
    });
});

//------------------------
// fetch users for groups
//-----------------------
router.get('/users',function(req,res){
  console.log('hehehehehahaha');
  console.log("ggggggggggggg",req.query);
  request.get({
    url: userRoute + 'users',
    headers: { app: app },
    json: true
  },
 
  (err,response,body)=> {
    if(err){
      winston.error(`\nError Message : - ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
    } else {
      if (response.statusCode > 399) {
        winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
        res.status(400).send(response.body);
      } else if (response.statusCode < 400) {
        winston.info('-' + pid + '--' + '\ngetting users list\n')
        winston.debug('-' + pid + '--' + '\n users list ' + JSON.stringify(response.body) + '\n');
        res.json(response.body);
      }
    }
  }
)
})

//--------------------------------------------
//    Fetching distinct values active users
//--------------------------------------------
router.get('/activeusers/getDistinct', function (req, res) {
  // console.log("route is here",userRoute+'distinct');
  request.get(
    {
      headers: { app: app },
      url: userRoute + 'activeusers/distinct',
      json: true,
      qs: req.query
    },
    (err, response, body) => {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message : ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        // check condition for status code
        util.responseFound(response, callback => {
          if (!callback) {
            if (logging) {
              winston.error(`\nError Message : ${err.stack}`);
            }
            console.log('internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info(`\n-${pid}--  distinct values for filters\n`)
            winston.debug(`\n${pid}--  distinct values for filters` + JSON.stringify(response.body) + `\n`);
            res.json(response.body);
          }
        });
      }
    }
  );
});

//--------------------------------------------
//    Fetching distinct values
//--------------------------------------------
router.get('/getDistinct', function (req, res) {
  // console.log("route is here",userRoute+'distinct');
  request.get(
    {
      headers: { app: app },
      url: userRoute + 'distinct',
      json: true,
      qs: req.query
    },
    (err, response, body) => {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message : ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      }
      // res.send(err);

      else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nfetched distinct values for filters\n')
            winston.debug('-' + pid + '--' + '\ndistinct values for filters ' + JSON.stringify(response.body) + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});


router.get('/getUsers/:page', function (req, res) {
  // console.log("loggingefjnfdfjh", (config.logging == 'true'));
  // console.log("query is", req.query);
  request.get({

    url: userRoute + 'user/' + req.params.page,
    headers: { app: app },
    qs: req.query,
    json: true

  }
    ,
    (err, response, body) => {

      if (err) {
        // res.send(err);
        winston.error(`\nError Message : - ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        if (response.statusCode > 399) {
          winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
          res.status(400).send(response.body);
        } else if (response.statusCode < 400) {
          winston.info('-' + pid + '--' + '\ngetting users list\n')
          winston.debug('-' + pid + '--' + '\n users list ' + JSON.stringify(response.body) + '\n');
          res.json(response.body);
        }
      }
    }

  )
});




//--------------------------------------------
//      Archieve User
//--------------------------------------------

router.delete('/deleteUser', function (req, res) {
  let user = { userId: req.query.userid };
  request.put(
    {
      headers: {
        app: app
      },
      url: userRoute + 'deleteUser',
      body: user,
      json: true
    },
    function (err, response, body) {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message : ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      }
      else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nUser Archived\n')
            winston.debug('-' + pid + '--' + '\n' + JSON.stringify(response.body) + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});

//--------------------------------------------
//      Active/In-active User
//--------------------------------------------
router.put('/setstate', function (req, res) {
  request.put(
    {
      headers: {
        app: app
      },
      url: userRoute + 'setstate',
      body: req.body,
      json: true
    },
    function (err, response, body) {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message : ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else if (response.statusCode < 400) {
            winston.info('-' + pid + '--' + '\nUser state  changed\n')
            winston.debug('-' + pid + '--' + '\n user: ' + JSON.stringify(response.body) + '\n');
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
      headers: {
        app: app
      },
      url: userRoute + 'resetpassword',
      body: req.body,
      json: true
    },
    function (err, response, body) {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message : ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nEmail link send for password change\n')
            winston.debug('-' + pid + '--' + '\n' + JSON.stringify(response.body) + '\n');
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
  request.get(
    {
      headers: {
        app: app
      },
      url: userRoute + 'resetpassword/' + req.params.token
    },
    function (err, response, body) {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message : ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\ncorrect user\n')
            winston.debug('-' + pid + '--' + '\n' + JSON.stringify(response.body) + '\n');
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
      headers: {
        app: app
      },
      url: userRoute + 'savepassword',
      body: req.body,
      json: true
    },
    function (err, response, body) {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message : ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nPassword has been reset\n')
            winston.debug('-' + pid + '--' + '\n' + JSON.stringify(response.body) + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});

module.exports = router;
