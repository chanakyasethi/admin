var mongoose = require('mongoose');

var assignTestSchema = new mongoose.Schema({
  test: {
    type: String,
    required: true
  },
  candidate: {
    type: String,
    required: true
  }
});

const AssignTest = (module.exports = mongoose.model(
  'assignedTest',
  assignTestSchema
));

module.exports.getTestsByCandidate = function (queryData, callback) {
  AssignTest.find(queryData, callback);
};

module.exports.assignTestToCandidate = function (assignTests, callback) {
  AssignTest.insertMany(assignTests).then(
    savedAssignTests => callback(null, savedAssignTests),
    error => callback(error)
  );
};

module.exports.findAllCandidatesAndRemove = function (unassignData, callback) {
  var data = {
    test: unassignData.testid,
    candidate: unassignData.candidateid
  }
  // console.log('un assigned to: ', data);
  AssignTest.findOneAndRemove(data, callback);

};

module.exports.getCandidatesByTest = function (test, callback) {
  const candidate = { test: test };
  AssignTest.find(candidate, callback);
};
