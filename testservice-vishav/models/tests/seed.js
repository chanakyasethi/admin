const { ObjectID } = require('mongodb');

const Test = require('./../models/test');
const Question = require('./../models/question');

const testOneId = new ObjectID();
const testTwoId = new ObjectID();
const testThreeId = new ObjectID();
const seedTests = [
  {
    _id: testOneId,
    testName: 'Test 1',
    category: 'category 1',
    duration: 301,
    difficultylevel: 'easy1'
  },
  {
    _id: testTwoId,
    testName: 'Test 2',
    category: 'other category2',
    duration: 602,
    difficultylevel: 'hard2'
  },
  {
    _id: testThreeId,
    testName: 'Test 3',
    category: 'other category3',
    duration: 603,
    difficultylevel: 'hard3',
    state: 'archived'
  }
];

const populateTests = done => {
  Test.remove({})
    .then(() => {
      return Test.insertMany(seedTests);
    })
    .then(() => done());
};

const questionOneId = new ObjectID();
const questionTwoId = new ObjectID();
const seedQuestions = [
  {
    _id: questionOneId,
    text: 'Where are you?',
    options: ['Delhi', 'Mumbai', 'Chennai', 'Kolkata'],
    answer: 0
  },
  {
    _id: questionTwoId,
    text: 'Good question?',
    options: ['Yes', 'No', 'IDK', 'Nobody knows'],
    answer: 2
  }
];

const populateQuestions = done => {
  Question.remove({})
    .then(() => {
      return Question.insertMany(seedQuestions);
    })
    .then(() => done());
};

module.exports = { seedTests, populateTests, seedQuestions, populateQuestions };
