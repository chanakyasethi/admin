const Response = require('../models/response');
const realTestInstance = require('../models/testInstance');
const practiceTestInstance = require('../models/practiceTestInstance');
const mongoose = require('mongoose');
const _ = require('lodash');

const config = require('../config/config');
const resultLogic = require('./resultLogic');
const remainingDurationLogic = require('./remainingDurationLogic');
const request = require('request');

const testRoute = 'https://testservice-cfe.herokuapp.com/testroutes/';

module.exports.recordResponse = function (request, callback) {
  var testInstance;
  if (request.practice)
    testInstance = practiceTestInstance;
  else
    testInstance = realTestInstance;


  console.log('request body', request);
  var newResponse = _.pick(request, Object.keys(Response.schema.paths));//{testId:'',candidateId:'',state:'',attempt:''}
  var newtestInstance = _.pick(request, Object.keys(testInstance.schema.paths));//
  let restOfInfo = _.pick(request, [
    'startTime',
    'resumeTime',
    'periodicTime',
    'finishTime',
    'pauseTime'
  ]);
  var currentTimestamp = new Date().getTime();

  console.log(
    'object from ft newtestInstance: ' + JSON.stringify(newtestInstance)
  );
  console.log('object from ft newResponse: ' + JSON.stringify(newResponse));
  console.log('object from ft newRestOfInfo: ' + JSON.stringify(restOfInfo));

  switch (newResponse.state) {
    case 'start':
      {
        getTest(newtestInstance.testId, (err, testDuration) => {
          if (err) callback();
          else {
            console.log('start case');
            testInstance.findBytestIdAndcandidateId(
              newtestInstance.testId,
              newtestInstance.candidateId,
              function (err, exist) {
                console.log('exist', exist);
                if (err) callback();
                else if (!exist) {
                  console.log("don't exist ");
                  newtestInstance.status = 'ongoing';
                  newtestInstance.lastrecordedClientTime = restOfInfo.startTime;
                  newtestInstance.totalAllocatedTime = testDuration * 60000;
                  newtestInstance.startTimeServer = currentTimestamp;
                  newtestInstance.lastrecordedServerTime = currentTimestamp;

                  testInstance(newtestInstance).save();
                  let responseObject = {
                    remainingDuration: testDuration * 60000,
                    sequenceNumber: restOfInfo.startTime,
                    serverTime: currentTimestamp
                  };

                  callback(responseObject);
                } else {
                  console.log('error exist case');
                  callback();
                }
              }
            );
          }
        });
      }
      break;
    case 'resume':
      {
        console.log('resume case');
        testInstance.findBytestIdAndcandidateId(
          newtestInstance.testId,
          newtestInstance.candidateId,
          function (err, exist) {
            console.log('resume exist case', exist);

            let timeDifference =
              currentTimestamp - exist.lastrecordedServerTime;
            console.log('timedifference', timeDifference);
            console.log('actualTimeSpent', actualTimeSpent);
            if (err) callback();
            else if (
              exist &&
              timeDifference >= config.ALLOW_RESUME &&
              exist.status === 'ongoing'
            ) {
              console.log('TD exist case');
              testInstance.findByIdAndUpdate(
                exist.id,
                {
                  resumeTimeServer: currentTimestamp,
                  lastrecordedServerTime: currentTimestamp,
                  inactiveTime: offlineTime,
                  lastrecordedClientTime: restOfInfo.resumeTime
                },
                { new: true },
                function (err, data) {
                  if (err) callback();
                  else {
                    let remainingTime =
                      exist.totalAllocatedTime - exist.timeSpent;
                    console.log('remaining time', remainingTime);
                    let responseObject = {
                      response: exist.response,
                      remainingDuration: remainingTime,
                      sequenceNumber: restOfInfo.resumeTime,
                      serverTime: currentTimestamp
                    };
                    callback(responseObject);
                  }
                }
              );
            } else callback(null);
          }
        );
      }
      break;
    case 'periodic':
      {
        console.log('periodic case');
        testInstance.findBytestIdAndcandidateId(
          newtestInstance.testId,
          newtestInstance.candidateId,
          function (err, exist) {
            // console.log('exist periodic value', exist.response);
            if (err) callback();
            else if (!exist) callback();
            else {
              if (
                exist.status !== 'completed' &&
                exist.lastrecordedClientTime < restOfInfo.periodicTime
              ) {
                let timeSpent = currentTimestamp - exist.lastrecordedServerTime;
                let actualTimeSpent = timeSpent + exist.timeSpent;

                console.log(
                  'periodic true condition spent time difference',
                  actualTimeSpent
                );
                testInstance.findByIdAndUpdate(
                  exist.id,
                  {
                    response: newtestInstance.response,
                    lastrecordedClientTime: restOfInfo.periodicTime,
                    periodicTimeServer: currentTimestamp,
                    timeSpent: actualTimeSpent
                  },
                  { new: true },
                  function (err, data) {
                    if (err) callback();
                    else {
                      let remainingTime =
                        exist.totalAllocatedTime - actualTimeSpent;
                      console.log('remaining time', remainingTime);
                      let responseObject = {
                        remainingDuration: remainingTime,
                        sequenceNumber: restOfInfo.periodicTime,
                        serverTime: currentTimestamp
                      };
                      callback(responseObject);
                    }
                  }
                );
              } else callback();
            }
          }
        );
      }
      break;

    case 'finish':
      {
        console.log('finish case');
        testInstance.findBytestIdAndcandidateId(
          newtestInstance.testId,
          newtestInstance.candidateId,
          function (err, exist) {
            if (err) callback();
            else if (!exist) callback();
            else {
              if (exist.status !== 'completed') {
                let timeSpent = currentTimestamp - exist.lastrecordedServerTime;
                let actualTimeSpent = timeSpent + exist.timeSpent;
                testInstance.findByIdAndUpdate(
                  exist.id,
                  {
                    response: newtestInstance.response,
                    finishTimeServer: currentTimestamp,
                    lastrecordedClientTime: newtestInstance.finishTimeClient,
                    lastrecordedServerTime: currentTimestamp,
                    status: 'finished',
                    timeSpent: actualTimeSpent,
                    finishMode: newtestInstance.finishMode
                  },
                  { new: true },
                  function (err, data) {

                    if (err) callback();
                    else {
                      resultLogic.computeResult(
                        { testId: newtestInstance.testId, practice: request.practice },
                        (err, response) => {
                          if (err) callback();
                          else {
                            let remainingTime =
                              exist.totalAllocatedTime - actualTimeSpent;
                            console.log('remaining time', remainingTime);
                            let responseObject = {
                              remainingDuration: remainingTime,
                              sequenceNumber: restOfInfo.finishTime,
                              serverTime: currentTimestamp
                            };
                            callback(responseObject);
                          }
                        }
                      );
                    }
                  }
                );
              }
            }
          }
        );
      }
      break;

    case 'testPause': {
      testInstance.findBytestIdAndcandidateId(
        newtestInstance.testId,
        newtestInstance.candidateId,
        function (err, exist) {
          if (err) callback();
          else if (!exist) callback();
          else {
            //let pauseDurationInSeconds = newtestInstance.pauseDuration * 60;
            let timeSpent = currentTimestamp - exist.lastrecordedServerTime;
            let actualTimeSpent = timeSpent + exist.timeSpent; //milli

            console.log('testPause true condition');

            testInstance.findByIdAndUpdate(
              exist.id,
              {
                lastrecordedClientTime: restOfInfo.pauseTime,
                periodicTimeServer: currentTimestamp,
                timeSpent: actualTimeSpent
              },
              { new: true },
              function (err, data) {
                if (err) callback();
                else {
                  let remainingTime =
                    exist.totalAllocatedTime - actualTimeSpent;
                  console.log('remaining time', remainingTime);
                  let responseObject = {
                    remainingDuration: remainingTime,
                    sequenceNumber: restOfInfo.pauseTime,
                    serverTime: currentTimestamp
                  };

                  callback(responseObject);
                }
              }
            );
          }
        }
      );
    }

    default: {
      console.log('error portion');
      callback();
    }
  }
};

getTest = function (testId, callback) {
  request.get(
    {
      qs: {
        testId: testId
      },
      url: testRoute + 'testObject',
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
