const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const http = require('http');
const querystring = require('querystring');
const request = require('request');
const multer = require('multer');
var autoReap = require('multer-autoreap');
var fs = require('fs');

const csv = require('csvtojson');

const config = require('../config/config');
const util = require('../utility/utility');

const upload = multer({ dest: 'tmp/' });
autoReap.options = {
  reapOnError: true
};

const winston = require('../logger').logger;
var logging = (config.logging == 'true');
var multifile = (config.multiFileLog == 'true');
var process = require('process');
var pid = "";
if (!multifile) {
  pid = process.pid;
}

//-------------------------------
//        Add Test Details
//-------------------------------
router.post('/testUpload', function (req, res) {
  let newTest = {
    _id: req.body.id,
    testName: req.body.testName,
    category: req.body.category,
    duration: req.body.duration,
    difficultylevel: req.body.difficultylevel,
    practice: req.body.practice
  };
  request.post(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/testDetails',
      body: newTest,
      json: true
    },
    function (err, response, body) {
      if (err) {
        winston.error(`\nError Message :` + `- ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\ntest added successfully\n')
            winston.debug('-' + pid + '--' + '\n test added :' + JSON.stringify(response.body) + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});

//----------------------------------
//        Uploading Questions
//----------------------------------
router.post('/addquestions', upload.single('file'), autoReap, function (
  req,
  res,
  next
) {

  questionarray = [];
  csv()
    .fromFile(req.file.path)
    .on('end_parsed', ques_array => {
      request.post(
        {
          url: config.TEST_SERVICE_PORT + '/testroutes/addquestions',
          body: ques_array,
          json: true
        },
        function (err, response, body) {
          if (err) {
            winston.error(`\nError Message : - ${pid} --- ${err.stack} `);
            res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
          } else {
            // res.send(response.body);
            util.responseFound(response, callback => {
              if (!callback) {
                winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
                res.status(400).send(response.body);
              } else {
                winston.info('-' + pid + '--' + '\nquestion added succesfully\n')
                winston.debug('-' + pid + '--' + '\n question added is:' + JSON.stringify(response.body) + '\n');
                res.json(response.body);
              }
            });
          }
        }
      );
    });
});

//--------------------------------------------
//    Append questions with testdetails
//--------------------------------------------
router.put('/updatetest', function (req, res) {
  // console.log(req.body);
  request.put(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/updatetest',
      body: req.body,
      json: true
    },
    function (err, response, body) {
      if (err) {
        winston.error(`\nError Message : - ${pid} --- ${err.stack} `);
        res.send(err);
        // res.send(err);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\ntest successfully updated\n')
            winston.debug('-' + pid + '--' + '\n updated test is' + JSON.stringify(response.body) + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});

//--------------------------------------------
//           publish test api
//--------------------------------------------
router.put('/publishtest', function (req, res) {
  request.put(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/publishtest',
      body: req.body,
      json: true
    },
    function (err, response, body) {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message : - ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        // res.send(response);
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\ntest published successfully\n')
            winston.debug('-' + pid + '--' + '\n test published : ' + JSON.stringify(response.body) + '\n');
            res.json(response);
          }
        });
      }
    }
  );
});

//--------------------------------------------
//    Fetching QuestionList
//--------------------------------------------
router.put('/getQuestIds', function (req, res) {
  request.put(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/questionList',
      body: req.body,
      json: true
    },
    function (err, response, body) {
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
            winston.info('-' + pid + '--' + '\nquestions loaded successfully from test service\n')
            winston.debug('-' + pid + '--' + '\n questions loaded are' + JSON.stringify(response.body) + '\n');
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

//--------------------------------------------
//    Fetching TestLists
//--------------------------------------------


router.get('/getTests/:page', function (req, res) {
  request.get({
    url: config.TEST_SERVICE_PORT + '/testroutes/testList/' + req.params.page,
    qs: req.query,
    json: true
  }
    ,
    (err, response, body) => {
      console.log("admin backend entered");
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
            winston.info('-' + pid + '--' + '\ngetting test list\n')
            winston.debug('-' + pid + '--' + '\n test list ' + JSON.stringify(response.body) + '\n');
            res.json(response.body);
          }
        });
      }
    })
});


//--------------------------------------------
//             archive test
//--------------------------------------------
router.delete('/deleteTest', function (req, res) {
  let test = { testId: req.query.testid };
  request.put(
    {
      url: config.TEST_SERVICE_PORT + '/testroutes/deletetest',
      body: test,
      json: true
    },
    function (err, response, body) {
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
            winston.info('-' + pid + '--' + '\ntest deleted successfully\n')
            winston.debug('-' + pid + '--' + '\n test deleted : ' + JSON.stringify(response.body) + '\n');
            res.json(response);
          }
        });
      }
    }
  );
});

//-----------------------------------------------------
//    Assigning Test to A candidate and All candidates
//------------------------------------------------------
router.post('/assigntest', function (req, res) {
  // console.log('in admin backend');
  let assingationData = {
    testId: req.body.params.testid,
    users: req.body.params.users,
    assign: req.body.params.assign
  };
  console.log(assingationData);
  request.post(
    {
      url: config.TEST_SERVICE_PORT + '/assignroutes/assignToCandidate',
      body: assingationData,
      json: true
    },
    function (err, response, body) {
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
            winston.info('-' + pid + '--' + '\nsuccessfully assigned test\n')
            winston.debug('-' + pid + '--' + '\n assigned test: ' + JSON.stringify(response.body) + '\n');

          }
        });
      }
    }
  );
});

//-----------------------------------------------------
//    get candidates from assigned test
//------------------------------------------------------
router.get('/assignedcandidates/:id', function (req, res) {
  // console.log('in admin backend');
  // console, log("fddddddddddddddddddd", req.query);
  request.get(
    {
      url:
        config.TEST_SERVICE_PORT +
        '/assignroutes/assignedcandidates/' +
        req.params.id,
      json: true
    },
    function (err, response) {
      if (err) {
        winston.error(`\nError Message : - ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\n got candidates to whom test is assigned\n')
            winston.debug('-' + pid + '--' + '\n candidate list from assigned test is ' + JSON.stringify(response.body) + '\n');

            res.json(response.body);
          }
        });
      }
    }
  );
});

//-----------------------------------------------------
//       get Test state of particular candidate
//------------------------------------------------------
router.get('/state/:id', function (req, res) {
  request.put(
    {
      url: config.RESULT_SERVICE_PORT + '/response/state/' + req.params.id,
      body: { candidates: req.query.candidate },
      json: true
    },
    function (err, response) {
      if (err) {
        // res.json(err);
        winston.error(`\nError Message : - ${pid} --- ${err.stack} `);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\n successfully got test state for the candidate\n')
            winston.debug('-' + pid + '--' + '\n test state is ' + JSON.stringify(response.body) + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});




module.exports = router;
