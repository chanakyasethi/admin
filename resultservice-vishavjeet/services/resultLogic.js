const Response = require('../models/response');
const Result = require('../models/response');
const realTestInstance = require('../models/testInstance');
const practiceTestInstance = require('../models/practiceTestInstance');
const resultRoute = require('../routes/result');
const mongoose = require('mongoose');
const request = require('request');
const _ = require('lodash');

const config = require('../config/config');
const testRoute = 'https://testservice-cfe.herokuapp.com/testroutes/';

module.exports.computeResult = function (testObj, callback) {
  var testInstance;
  if (testObj.parctice)
    testInstance = practiceTestInstance;
  else
    testInstance = realTestInstance;

  getTestObject(testObj.testId, (err, testObject) => {
    if (err) callback(err);
    if (testObject) {
      testInstance.getResponseObject(testObj.testId, (err, responseObject) => {
        if (err) callback(err);
        if (responseObject) {
          for (var i = 0; i < responseObject.length; i++) {
            var count = 0;
            for (var j = 0; j < responseObject[i].response.length; j++) {
              var questionNumberIndex = responseObject[i].response[j].key;
              if (
                testObject[questionNumberIndex - 1].answer ===
                responseObject[i].response[j].value - 1
              ) {
                count++;
              }
            }

            testInstance.findByIdAndUpdate(
              responseObject[i].id,
              { score: count, resultComputed: true },
              { new: true },
              function (err) {
                if (err) callback(err);
              }
            );
          }
          callback(null, responseObject);
        }
      });
    }
  });
};

//--------------------------------------------
//    fetching TestObject from TestService
//--------------------------------------------
getTestObject = function (testId, callback) {
  request.get(
    {
      qs: {
        testId: testId
      },
      url: testRoute + 'questions',
      json: true
    },
    function (err, response) {
      if (err) callback(err);
      else {
        callback(null, response.body);
      }
    }
  );
};
