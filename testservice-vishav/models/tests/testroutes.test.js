const expect = require('expect');
const request = require('supertest');
const _ = require('lodash');

const { app } = require('./../app');
const Test = require('../models/test');
const Question = require('../models/question');
const {
  seedTests,
  populateTests,
  seedQuestions,
  populateQuestions
} = require('./seed');

beforeEach(populateTests);
beforeEach(populateQuestions);

describe('POST /testroutes/testDetails', () => {
  var testInput = {
    testName: 'Test -1',
    category: 'category -1',
    duration: 299,
    difficultylevel: 'easy -1'
  };

  it('should create a new Test', done => {
    request(app)
      .post('/testroutes/testDetails')
      .send(testInput)
      .expect(200)
      .expect(res => {
        expect(res.body._id).toBeTruthy();
        expect(res.body.state).toBe('draft');
        expect(res.body).toMatchObject(testInput);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Test.find({ testName: testInput.testName })
          .then(tests => {
            expect(tests.length).toBe(1);
            expect(tests[0].testName).toBe(testInput.testName);
            done();
          })
          .catch(e => done(e));
      });
  });

  it('should not create Test with invalid body data', done => {
    request(app)
      .post('/testroutes/testDetails')
      .send(_.pick(testInput, ['category', 'duration', 'difficultylevel']))
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Test.find()
          .then(tests => {
            expect(tests.length).toBe(seedTests.length);
            done();
          })
          .catch(e => done(e));
      });
  });

  it('should update the Test', done => {
    var testId = seedTests[0]._id.toHexString();
    var body = _.pick(testInput, ['category', 'duration', 'difficultylevel']);
    body['_id'] = testId;
    request(app)
      .post('/testroutes/testDetails')
      .send(body)
      .expect(200)
      .expect(res => {
        expect(res.body._id).toEqual(testId);
        expect(res.body).toMatchObject(body);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Test.findById(testId)
          .then(test => {
            // console.log('test', test);
            expect(test).toBeTruthy();
            expect(test._id).toEqual(seedTests[0]._id);
            expect(test.toObject()).toMatchObject(
              _.pick(testInput, ['category', 'duration', 'difficultylevel'])
            );
            done();
          })
          .catch(e => done(e));
      });
  });
});

describe('PUT /testroutes/updatetest', () => {
  it('should add the questions to the Test', done => {
    var testId = seedTests[0]._id.toHexString();
    var qIds = [
      seedQuestions[0]._id.toHexString(),
      seedQuestions[1]._id.toHexString()
    ];

    // console.log('tetsId', testId);
    // console.log('qIds', qIds);

    request(app)
      .put('/testroutes/updatetest')
      .send({
        tid: testId,
        qIds
      })
      .expect(200)
      .expect(res => {
        expect(res.body._id).toBe(testId);
        expect(res.body.questions).toEqual(qIds);
        expect(res.body.questions.length).toBe(2);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        // Test.find({ testName: testInput.testName })
        // 	.then(tests => {
        // 		expect(tests.length).toBe(1);
        // 		expect(tests[0].testName).toBe(testInput.testName);
        // 		done();
        // 	})
        // 	.catch(e => done(e));
        done();
      });
  });
});

describe('GET /testroutes/testList', () => {
  it('should get all non-Archived Tests', done => {
    request(app)
      .get('/testroutes/testList')
      .expect(200)
      .expect(res => {
        // console.log(res.body);
        expect(Object.keys(res.body).length).toBe(
          seedTests.filter(it => it.state !== 'archived').length
        );
      })
      .end(done);
  });
});
