const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  options: [
    {
      type: String,
      required: true
    }
  ],
  answer: {
    type: Number,
    required: true
  }
});

const Question = mongoose.model('Question', questionSchema);

Question.quesDetails = function(newQuestion, callback) {
  Question.insertMany(newQuestion)
    .then(function(question) {
      callback(null, question);
    })
    .catch(function(err) {
      // error handling here
      callback(err);
    });
};

module.exports = Question;
