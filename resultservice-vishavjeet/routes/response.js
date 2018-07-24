const express = require('express');
const router = express.Router();

const responseLogic = require('../services/responseLogic');
const Response = require('../models/response');
const realTestInstance = require('../models/testInstance');
const practiceTestInstance = require('../models/practiceTestInstance');
const errorHandler = require('../services/errorHandler');

const config = require('../config/config');
const logger = require('../logger').logger;
var multifile = (config.multiFileLog == 'true');
var process = require('process');
var pid = "";
if (!multifile) {
  pid = process.pid;
}

router.post('/partialResponse', (req, res) => {
  responseLogic.recordResponse(req.body, response => {
    console.log('response from logic: ' + JSON.stringify(response));
    if (response) {
      logger.info(`\n  ${pid} : Response recorded: ${response}`)
      logger.debug(`\n  ${pid} : Response recorded: ${response}`)
      res.json({ success: true, msg: 'Response recorded', data: response });
    } else {
      errorHandler(400, { msg: "Failed to process data" }, res);
      console.log('error case');
    }
  });
});

router.put('/state/:id', (req, res) => {
  var tid = req.params.id;
  var candidates = req.body.candidates;
  var testInstance;
  if (req.body.practice)
    testInstance = practiceTestInstance;
  else
    testInstance = realTestInstance;

  testInstance.findTestStateforCandidate(tid, candidates, function (err, test) {
    if (err) {
      errorHandler(400, { msg: "candidate does not exist", source: err }, res);

    } else {
      logger.info(`\n  ${pid} : test state for candidate: ${candidates} is : ${test}`)
      logger.debug(`\n  ${pid} : test state for candidate: ${candidates} is : ${test}`)
      // console.log('response in test', test);
      res.json(test);
    }
  });
});
//===================================================
//      GETTING STATES OF ALL TESTS
//===================================================
router.put('/teststate/:id', (req, res) => {
  var testInstance;
  if (req.body.practice)
    testInstance = practiceTestInstance;
  else
    testInstance = realTestInstance;

  var cid = req.params.id;
  var tests = req.body.tids;
  testInstance.stateForAssignedTest(cid, tests, function (err, test) {
    if (err) {
      errorHandler(400, { msg: "test does not exist", source: err }, res);
    } else {
      logger.info(`\n  ${pid} : state for assigned test: ${test}`)
      res.json({ test: test });
    }
  });
});




module.exports = router;
