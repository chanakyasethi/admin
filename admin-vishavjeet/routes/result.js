const router = require('express').Router();
const http = require('http');
const request = require('request');

const winston = require('../logger').logger;
const config = require('../config/config');
const util = require('../utility/utility');

const resultRoute = config.RESULT_SERVICE_PORT + '/result/';
var logging = (config.logging == 'true');
var multifile = (config.multiFileLog == 'true');
var process = require('process');
var pid = "";
if (!multifile) {
  pid = process.pid;
}

//--------------------------------------------
//    Compute Result
//--------------------------------------------
router.post('/computeResult', function (req, res) {
  // console.log('testId', req.body.params.testId);
  request.post(
    {
      qs: {
        testId: req.body.params.testId
      },
      url: resultRoute + 'computeResult',
      json: true
    },
    function (err, response, body) {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message :${process.pid} -- ${err.stack}\n`);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error(`\ninternal server :${process.pid} -- ${response.body.msg}\n`);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\ntest result computed\n')
            winston.debug('-' + pid + '--' + '\n result computed is' + JSON.stringify(response.body) + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});

//--------------------------------------------
//    Fetching Result
//--------------------------------------------
router.get('/result', function (req, res) {
  // console.log('request', req.query);
  request.get(
    {
      qs: {
        testId: req.query.testId,
        candidateIds: req.query.candidateIds
      },
      url: resultRoute + 'result',
      json: true
    },
    function (err, response, body) {
      if (err) {
        // res.send(err);
        winston.error(`\nError Message :${process.pid} -- ${err.stack}\n`);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('-' + pid + '--' + 'internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nresults fetched\n')
            winston.debug('-' + pid + '--' + '\n results fetched are' + JSON.stringify(response.body) + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});

module.exports = router;

