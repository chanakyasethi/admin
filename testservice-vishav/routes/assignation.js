const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Assign = require('../models/assignation');
const Test = require('../models/test');
const Question = require('../models/question');
const errorHandler = require("../services/errorHandler");

const config = require('../config/config');
const logger = require('../logger').logger;
var multifile = (config.multiFileLog == 'true');
var process = require('process');
var pid = "";
if (!multifile) {
  pid = process.pid;
}

router.post('/assignToCandidate', (req, res, next) => {
  var candidates = req.body.users;
  var assignTests = [];
  if (req.body.assign === true) {
    candidates.forEach(candidate => {
      assignTests.push(
        new Assign({
          test: req.body.testId,
          candidate: candidate
        })
      );
    });
    Assign.assignTestToCandidate(assignTests, (err, savedAssignTests) => {
      if (err) {
        errorHandler(400, { msg: "Somthing went wrong", source: err }, res);
      } else {
        logger.info(`\n  ${pid} : The test is assigned for the candidate: ${candidates}`)
        logger.debug(`\n  ${pid} : The test is assigned for the candidate: ${candidates}`)
        res.json({
          success: true,
          msg: 'The test is assigned for the candidate',
          data: savedAssignTests
        });
      }
    });
  } else {
    var candidate;
    candidates.forEach(candi => {
      candidate = candi
    })
    var test = {
      testid: req.body.testId,
      candidateid: candidate
    }
    Assign.findAllCandidatesAndRemove(test, function (err, data) {
      if (err) {
        errorHandler(400, { msg: "Somthing went wrong", source: err }, res);

      }
      errorHandler(200, { msg: "The test is un-assigned for the candidate" }, res);

    });
  }
});

//-------------------------------------------------
//     get candidates to whom test is assigned
//-------------------------------------------------
router.get('/assignedcandidates/:id', (req, res, next) => {
  Assign.getCandidatesByTest(req.params.id, function (err, candidates) {
    if (err) {
      errorHandler(400, { msg: "Somthing went wrong", source: err }, res);

    } else {
      // console.log('hhhhhhhhhh' + candidates);
      var candidateIds = [];
      candidates.forEach(function (candids) {
        candidateIds.push(candids.candidate);
      });
      // console.log('matched ids', candidateIds);
      logger.info(`\n  ${pid} : assigned candidates to the test were displayed: ${candidateIds}`)
      logger.debug(`\n  ${pid} : assigned candidates to the test were displayed: ${candidateIds}`)
      res.json(candidateIds);
    }
  });
});

//----------------------------------------------------------
//          get list of assigned test for candidate
//----------------------------------------------------------
router.get('/assignedTestList', (req, res, next) => {
  //=======QUERY ON FILTERS=============================
  let filterQuery = {};
  console.log(req.headers.category)
  //====================================================
  //===============================
  //  MAPING QUERY OBJECT (testQ)
  //===============================
  if (req.query.difficultylevel != undefined && req.query.difficultylevel != "")
    filterQuery.difficultylevel = req.query.difficultylevel;

  if (req.query.category != undefined && req.query.category != "")
    filterQuery.category = req.query.category;
    if (req.headers.category != undefined && req.headers.category != "")
    filterQuery.category = req.headers.category;


  console.log('Query Data ', filterQuery);

  Assign.getTestsByCandidate({ candidate: req.headers.ofuser }, function (err, tests) {
    if (err) {
      errorHandler(400, { msg: "Somthing went wrong", source: err }, res);

    } else {
      var testids = [];
      tests.forEach(function (element) {
        testids.push(element.test);
      });
      // console.log(testids);
      filterQuery._id = testids;
      console.log("===============================================");
      console.log(filterQuery);
      console.log("===============================================");

      Test.find(filterQuery, (err, testdetails) => {
        if (err) {
          errorHandler(400, { msg: "Failed to get test", source: err }, res);

        } else {
          // console.log(testdetails)
          logger.info(`\n  ${pid} : get list of assigned test for candidate: ${testdetails}`)
          logger.debug(`\n  ${pid} : get list of assigned test for candidate: ${testdetails}`)
          res.json(testdetails);
        }
      });
    }
  });
});

module.exports = router;
