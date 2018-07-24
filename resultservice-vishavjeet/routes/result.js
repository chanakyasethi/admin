const express = require('express');
const router = express.Router();
const request = require('request');

const responseLogic = require('../services/responseLogic');
const resultLogic = require('../services/resultLogic');
const Response = require('../models/response');
const realTestInstance = require('../models/testInstance');
const practiceTestInstance = require('../models/practiceTestInstance');

const testRoute = 'https://cfe-testservice.herokuapp.com/testroutes/';
const errorHandler = require('../services/errorHandler');

const config = require('../config/config');
const logger = require('../logger').logger;
var multifile = (config.multiFileLog == 'true');
var process = require('process');
var pid = "";
if (!multifile) {
  pid = process.pid;
}

//--------------------------------------------
//    Compute Result
//--------------------------------------------
router.post('/computeResult', (req, res) => {

  var testId = req.query.testId;
  resultLogic.computeResult({ testId: testId }, (err, response) => {
    if (err) {
      errorHandler(400, { msg: "Something went wrong", source: err }, res);
    }
    if (response) {
      // errorHandler(200, { msg: "Result has been Comptuted" }, res);
      logger.info(`\n  ${pid} : Result has been Comptuted: ${response}`)
      logger.debug(`\n  ${pid} : Result has been Comptuted: ${response}`)
      res.send({ msg: "Result has been Comptuted", result: res });

    } else {
      errorHandler(400, { msg: "Failed to process data" }, res);
    }
  });
});

//--------------------------------------------
//    Fetching Result
//--------------------------------------------
router.get('/result', function (req, res) {
  var testInstance = realTestInstance;
  console.log('candidate ids', req.query.candidateIds);
  testInstance.find(
    { candidateId: req.query.candidateIds, testId: req.query.testId },
    function (err, result) {
      if (err) {
        errorHandler(400, { msg: "Failed to load results", source: err }, res);
      }
      else {
        logger.info(`\n  ${pid} : Result has been fetched for candidates : ${result}`)
        logger.debug(`\n  ${pid} : Result has been fetched for candidates : ${result}`)
        res.send(result);
      }
    }
  );
});

//--------------------------------------------
//    fetching TestObject from TestService
//--------------------------------------------
module.exports.getTestObject = function (testId, callback) {
  request.get(
    {
      qs: {
        testId: testId
      },
      url: testRoute + 'questions',
      json: true
    },
    function (err, response) {
      if (err) {
        errorHandler(400, { msg: "Something went wrong", source: err }, res);
        callback(err);
      }
      else {
        callback(null, response.body);
      }
    }
  );
};

module.exports = router;
