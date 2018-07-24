const mongoose = require('mongoose');
const testInstance = require('./testInstance');

// Response Schema
const ResponseSchema = mongoose.Schema({
  testId: {
    type: String,
    required: true
  },
  candidateId: {
    type: String,
    required: true
  },
  state: {
    type: String,
    enum: ['start', 'periodic', 'finish'],
    default: 'start',
    required: true
  }, 
  attempt: {
    type: Number,
    required: true
  },

});

var Response = (module.exports = mongoose.model('Response', ResponseSchema));
