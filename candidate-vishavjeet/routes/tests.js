const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const request = require('request');

const config = require('../config/config');
const util = require('../utility/utility');

//--------------------------------------------
//+++++++++++++++++++++++++++++++++++++++++++
//-------------------------------------------

const winston = require('../logger').logger;
var logging = (config.logging == 'true');
var multifile = (config.multiFileLog == 'true');
var process = require('process');
var pid = "";
if (!multifile) {
  pid = process.pid;
}


//--------------------------------------------
//    Fetching distinct values
//--------------------------------------------
router.get('/getDistinct', function (req, res) {
  // console.log("admin distinct backend", req.headers);
  request.get({ url: config.TEST_SERVICE_PORT + '/testroutes/testList/distinct', json: true }
    ,
    (err, response, body) => {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message : - ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nsuccessfully got distinct values for filters\n')
            winston.debug('-' + pid + '--' + '\n filters distinct values are ' + JSON.stringify(response.body) + '\n');
            res.json(response.body);
          }
        });
      }
    }
  )
});



router.get('/getassignedtests', (req, res, next) => {
  const user = JSON.parse(req.headers.id);
  console.log(req.headers.category);
  const id = user.id;
  console.log('!!!!!!=================!!!!!!!', user);
  request.get(
    {
      url: config.TEST_SERVICE_PORT + '/assignroutes/assignedTestList',
      headers: {
        ofuser: id,
        category:req.headers.category
      },
      qs: req.query,
      json: true
    },
    function (err, response) {

      if (err) {

        winston.error(`\nError Message: - ${pid} --${err.stack}`);

        // res.send(err);
        res.status(500).json({ msg: 'Something went wrong Please try again!!!', error: err });

      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nAssignedtest get successfully\n')
            winston.debug('-' + pid + '--' + '\n test get :' + response.body + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});

router.put('/getQuestions', function (req, res) {
  // console.log('request in candidate', req.body);
  request.put(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/questionList',
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
            winston.info('-' + pid + '--' + '\nquestions get successfully\n')
            winston.debug('-' + pid + '--' + '\n questions get :' + response.body + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});



router.get('/categoryQuestions', function (req, res) {
  console.log("candidate category questions");
  request.get(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/categoryQuestions',
      body: req.query,
      json: true
    },
    function (err, response, body) {
      if (err) {
        console.log(err);
      } else {
        // console.log(response.body,body);
        res.json(response.body);
      }
    }
  )
})

router.post('/savepdf', function (req, res) {
  // console.log("==========================================================================================================");
  // console.log('request in candidate', req.body.user);
  // console.log("==========================================================================================================");  
  request.post(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/savepdf',
      body: req.body,
      json: true
    },
    function (err, response, body) {
      if (err) {

        winston.error(`\nError Message: - ${pid} --${err.stack}`);

        // res.send(err);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });

      } else {
        // console.log('sdfgggsdfg', response.body);
        // res.send(response.body);
        if (response.statusCode > 399) {
          winston.error('internal server: ', response.body.msg);

          res.status(400).send(response.body);
        } else if (response.statusCode < 400) {

          winston.info('-' + pid + '--' + '\nquestions get successfully\n')
          // winston.debug('-' + pid + '--' + '\n questions get :' + response.body + '\n');

          res.json(response.body);
        }
      }
    }
  );
});

router.get('/getpdfs', function (req, res) {
  // console.log("==========================================================================================================");
  // console.log('request get pdfs candidate', req.query);
  // console.log("==========================================================================================================");  
  request.get(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/getpdfs',
      body: req.query,
      json: true
    },
    function (err, response, body) {
      if (err) {

        winston.error(`\nError Message: - ${pid} --${err.stack}`);

        // res.send(err);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });

      } else {
        // console.log('sdfgggsdfg', response.body);
        // res.send(response.body);
        if (response.statusCode > 399) {
          winston.error('internal server: ', response.body.msg);

          res.status(400).send(response.body);
        } else if (response.statusCode < 400) {

          winston.info('-' + pid + '--' + '\nquestions get successfully\n')
          // winston.debug('-' + pid + '--' + '\n questions get :' + response.body + '\n');
          console.log(response.body.length);
          console.log("12333");

          res.json(response.body);
        }
      }
    }
  );
});

//=======================================
//    SAVE TEXT TO SPEECH APP ANS.
//======================================
router.put('/saveans', function (req, res) {

  console.log(req.body);
  // console.log(r(req.body.question));
  request.put(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/appAnswer',
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
            winston.info('-' + pid + '--' + '\nquestions get successfully\n')
            winston.debug('-' + pid + '--' + '\n questions get :' + response.body + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});


//=======================================
//    GETTING RESULTS TEXT TO SPEECH APP
//=======================================

router.get('/appresult/:id', function (req, res) {
  const user = req.params.id;
  request.get(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/appresult/' + user,
      headers: {
        // ofuser: user
      },
      json: true
    },
    function (err, response) {
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
            winston.info('-' + pid + '--' + '\nResult Fetched successfully\n')
            winston.debug('-' + pid + '--' + '\n Result Details :' + response.body + '\n');
            res.json(response.body);
            console.log(response.body);
          }
        });
      }
    })
});

//=======================================
//    GETTING WRONG RESPONSES
//=======================================

router.get('/getwrongresponse/:id', function (req, res) {
  console.log('/getwrongresponse/',req.params.id)
  const user = req.params.id;
  // console.log('reached');
  request.get(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/getwrongresponse/' + user,
      headers: {
        // ofuser: user
      },
      json: true
    },
    function (err, response) {
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
            winston.info('-' + pid + '--' + '\nResult Fetched successfully\n')
            winston.debug('-' + pid + '--' + '\n Result Details :' + response.body + '\n');
            res.json(response.body);
            console.log(response.body);
          }
        });
      }
    })
});

////=========================================
//  Showing wrong responses=========
////=========================================
router.put('/getwrongQuesAns/:id', function (req, res) {
  console.log('/getwrongQuesAns/',req.params.id)
  console.log('/getwrongQuesAns/',req.body)
  const user = req.params.id;
  // console.log('reached');
  request.put(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/getwrongQuesAns/' + user,
      headers: {
        // ofuser: user
      },
      body: req.body,
      json: true
    },
    function (err, response) {
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
            winston.info('-' + pid + '--' + '\nResult Fetched successfully\n')
            winston.debug('-' + pid + '--' + '\n Result Details :' + response.body + '\n');
            res.json(response.body);
            console.log(response.body);
          }
        });
      }
    })
});

router.get('/subjectcategory', function (req, res) {
  console.log("candidate subject category");
  request.get(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/subjectcategory',
      body: req.query,
      json: true
    },
    function (err, response, body) {
      if (err) {
        console.log(err);
      } else {
        res.json(response.body);
      }
    }
  )
})

router.post('/useraddquesans/:id', function (req, res) {
  console.log("candidate subject category",req.body);
  console.log("candidate subject category",req.params.id);
  request.put(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/useraddquesans/'+req.params.id,
      body: req.body,
      json: true
    },
    function (err, response, body) {
      if (err) {
        console.log(err);
      } else {
        res.json(response.body);
      }
    }
  )
})


module.exports = router;
