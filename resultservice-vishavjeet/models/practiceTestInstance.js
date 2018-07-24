const mongoose = require('mongoose');

// practiceTestInstance Schema
const practiceTestInstanceSchema = mongoose.Schema(
  {
    testId: {
      type: String,
      required: true
    },
    candidateId: {
      type: String,
      required: true
    },
    attempt: {
      type: Number
      // required: true
    },
    startTimeServer: {
      type: String
    },
    resumeTimeServer: {
      type: String
    },
    lastrecordedClientTime: {
      type: String
    },
    lastrecordedServerTime: {
      type: String
    },
    periodicTimeServer: {
      type: String
    },
    finishTimeServer: {
      type: String
    },
    finishMode: {
      type: String,
      enum: ['none', 'userSubmit', 'timeOver', 'testWindowClose', 'incomplete'],
      default: 'none'
    },
    status: {
      type: String,
      enum: ['not_started', 'ongoing', 'finished'],
      default: 'not_started',
      required: true
    },
    response: {
      type: Array
    },
    resultComputed: {
      type: Boolean,
      default: false
    },
    score: {
      type: Number
    },
    pauseTimeServer: {
      type: String
    },
    timeSpent: {
      type: Number,
      default: 0
    },
    totalAllocatedTime: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

var practiceTestInstance = (module.exports = mongoose.model(
  'practiceTestInstance',
  practiceTestInstanceSchema
));

// module.exports.addResponse = function(newResponse, callback) {
//   newResponse.save();
// };

module.exports.findBytestIdAndcandidateId = function (
  testId,
  candidateId,
  callback
) {
  const candidate = { testId: testId, candidateId: candidateId };
  practiceTestInstance.findOne(candidate, function (err, exist) {
    if (err) callback(err);
    else callback(null, exist);
  });
};

module.exports.findTestStateforCandidate = function (
  testid,
  candidates,
  callback
) {
  var promise;
  practiceTestInstance
    .find({ testId: testid, candidateId: candidates }, null, {
      new: true
    })
    .exec()
    .then(test => {
      callback(null, test);
    });
};

module.exports.stateForAssignedTest = function (candidate, testids, callback) {
  var promise;
  practiceTestInstance
    .find({ candidateId: candidate, testId: testids }, null, {
      new: true
    })
    .exec()
    .then(test => {
      callback(null, test);
    });
};

module.exports.getResponseObject = function (testId, callback) {
  practiceTestInstance.find({ testId: testId, resultComputed: false }, function (
    err,
    testObject
  ) {
    if (err) callback(err);
    else {
      callback(null, testObject);
    }
  });
};
