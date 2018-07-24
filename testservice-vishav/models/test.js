const mongoose = require('mongoose');

//TODO: Figure out difference between "mongoose.Schema" vs "new mongoose.Schema"
const testSchema = mongoose.Schema({
  testName: {
    type: String,
    required: true,
    minlength: 1,
    unique: true
  },
  createdOn: {
    type: Date,
    default: Date.now
  },
  category: {
    type: String,
    required: true
  },
  totalQuestion: {
    type: String
  },
  duration: {
    type: Number,
    required: true
  },
  difficultylevel: {
    type: String
  },
  state: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  },
  tcode: {
    type: String
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: false
    }
  ],
  practice: {
    type: Boolean,
    default: false
  }
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
