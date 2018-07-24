const express = require('express');
const router = express.Router();
const _ = require('lodash');
const Test = require('../models/test');
const Question = require('../models/question');
const TestPDF = require('../models/testpdf');
const SamplePDF = require('../models/samplepdf');
const {
  utils
} = require('../utils/utils');
const errorHandler = require("../services/errorHandler");
const validate = require("../services/validation");
const config = require('../config/config');
const AppTestAnswer = require('../models/appAnswer');
const WrongAnswer = require('../models/wronganswer');
const WrongAnswerUser = require('../models/wrongansweruser');

const logger = require('../logger').logger;
// var logging = (config.logging == 'true');
var multifile = (config.multiFileLog == 'true');
var process = require('process');
var pid = "";
if (!multifile) {
  pid = process.pid;
}


//---------------------------------------------------
//    adding a test details to Test collection
//---------------------------------------------------
router.post('/testDetails', (req, res, next) => {
  var body = utils.pruneInput(req.body, Test);
  var promise;
  const testId = req.body._id || null;
  //   var body = _.pick(req.body, ['testName', 'category', 'duration', 'difficultydifficultylevel']);
  // //   console.log('Input', body);
  if (testId) {
    //TODO: State specific validations here!
    Test.findByIdAndUpdate({ _id: testId }, body, function (err, updatedTest) {
      if (err) {
        errorHandler(400, { msg: "Failed to add test" }, res);
      }
      else {
        logger.info("Test updated " + updatedTest._id);
        logger.debug("Test updated " + JSON.stringify(updatedTest));
        res.json({ success: false, savedTest: updatedTest });

      }
    });
  } else {
    Test.find({ testName: req.body.testName }, function (err, test) {
      if (err) {
        errorHandler(400, { msg: "Somting went wrong" }, res);

      }
      else {
        if (test.length > 0) {
          return res.json({ success: true, msg: 'Test name already exists' });
        } else {
          var newTest = new Test(body);
          newTest.save(function (err, savedTest) {
            if (err)
              errorHandler(400, { msg: "Somting went wrong" }, res);

            else {
              logger.info(`\n  ${pid} : test was saved : ${savedTest.testName}`);
              logger.debug(`\n  ${pid} : test was saved : ${savedTest.testName}`);
              res.json({ success: false, savedTest: savedTest });
            }
          });
        }
      }

    });
  }

  // promise
  //   .then(savedTest => {
  //     savedtest={
  //       savedTest:savedTest,
  //       success:false
  //     }
  //       console.log('Saved test', savedTest);
  //     // res.json(savedtest);
  //   })
  //   .catch(e => {
  //     // console.log(e);
  //       // res.json({success:false,msg:'Test name already '});
  //       res.state(400).json({ success: false, msg: `Failed to add test: ${e}` });
  //   });
});


//-----------------------------------------
//          add questions from csv
//-----------------------------------------
router.post('/addquestions', (req, res, next) => {
  // console.log(req.body);

  let newQuestion = [];
  for (var i = 0; i < req.body.length; i++) {
    newQuestion[i] = new Question({
      text: req.body[i].text,
      options: req.body[i].options,
      answer: req.body[i].answer
    });
  }
  //console.log('Questionslist', newQuestion);
  Question.quesDetails(newQuestion, (err, question) => {
    if (err) {
      console.log('error', err);
      errorHandler(400, {
        msg: "Failed to add question",
        source: err
      }, res);

    }
    logger.info(`\n  ${pid} : Questions were added`)
    logger.debug(`\n  ${pid} : Questions were added`)
    res.json(question);
  });
});

//---------------------------------------------
//             published test
//---------------------------------------------
router.put('/publishtest', (req, res, next) => {
  console.log(req.body);
  Test.findByIdAndUpdate({
    _id: req.body.testid
  }, {
      state: 'published',
      tcode: req.body.testcode
    },
    function (err, tests) {
      if (err) {
        errorHandler(400, {
          msg: "Failed to delete test",
          source: err
        }, res);
      } else {
        logger.info(`\n  ${pid} : published tests are displayed`)
        logger.debug(`\n  ${pid} : published tests are displayed`)
        res.send(tests);
      }
    }
  );
});

//----------------------------------------------
//     getting distinct values for filteration
//----------------------------------------------
router.get('/testList/distinct', (req, res, next) => {
  Test.find().distinct('category', function (err, category) {
    if (err) {
      errorHandler(400, {
        msg: "Something went wrong",
        source: err
      }, res);

    } else {
      Test.find().distinct('difficultylevel', function (error, levels) {
        if (error) {
          errorHandler(400, {
            msg: "Something went wrong",
            source: error
          }, res);
        } else {
          Test.find().distinct('state', function (errr, states) {
            if (errr) {
              errorHandler(400, {
                msg: "Something went wrong",
                source: errr
              }, res);
            } else {
              logger.info(`\n  ${pid} : distinct values for filteration`)
              logger.debug(`\n  ${pid} : distinct values for filteration`)

              res.send({
                type: category,
                levels: levels,
                testStates: states
              })
            }
          })
        }
      })
    }
  })
})
//----------------------------------------------
//     fetching draft and published test
//----------------------------------------------

router.get('/testList/:page', (req, res, next) => {
  var perPage = parseInt(req.query.perPage) || 5;
  var page = req.params.page || 1;
  var sort = parseInt(req.query.sort) || 1;
  let testQ = {};

  //===============================
  //  MAPING QUERY OBJECT (testQ)
  //===============================
  if (req.query.category != undefined && req.query.category != "")
    testQ.category = req.query.category;

  if (req.query.difficultylevel != undefined && req.query.difficultylevel != "")
    testQ.difficultylevel = req.query.difficultylevel;

  if (req.query.state != undefined && req.query.state != "")
    testQ.state = req.query.state;
  if (req.query.perPage == "")
    perPage = 5;

  //=====================================
  // FILTERATION AND PAGINATION
  //======================================
  Test.find(testQ)
    .sort({
      testName: sort
    })
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec(function (err, tests) {
      //===================================
      //  COUNTING TOTAL FILTERED DATA
      //====================================
      Test.count(testQ).exec(function (err, count) {
        if (err) {
          errorHandler(400, {
            msg: "Something went wrong",
            source: err
          }, res);

        }
        logger.info(`\n  ${pid} : All Tests were shown`)
        logger.debug(`\n  ${pid} : All Tests were shown`)
        res.send({
          tests: tests,
          count: count,
          perPage: perPage,
          pages: Math.ceil(count / perPage)
        });
      });
    });
});

//==========PREVIOUS LOGIC ==================

// Test.find(testQ, function(err, tests) {
//   var testlistMap = {};
//   // console.log(tests);
//   tests.forEach(function(testlist) {
//     if (testlist.state === 'draft' || testlist.state === 'published') {
//       testlistMap[testlist._id] = testlist;
//     }
//   });
//   res.send(testlistMap);
// });
// });

//     tests.forEach(function (testlist) {
//       testlistMap[testlist._id] = testlist;
//     });
//     res.json(testlistMap);
//   });
// });

//---------------------------------------------
//      deleting test of particular id
//---------------------------------------------
router.put('/deletetest', (req, res, next) => {
  Test.findByIdAndUpdate({
    _id: req.body.testId
  }, {
      state: 'archived'
    },
    function (err, tests) {
      if (err) {
        errorHandler(400, {
          msg: "Failed to delete test",
          source: err
        }, res);

      } else {
        logger.info(`\n  ${pid} : Test was archieved : ${req.body.testId}`)
        logger.debug(`\n  ${pid} : Test was archieved : ${req.body.testId}`)
        res.send(tests);
      }
    }
  );
});

//---------------------------------------------
//  updating test details with questions ref
//---------------------------------------------
router.put('/updatetest', (req, res, next) => {
  const body = _.pick(req.body, ['tid', 'qIds']);
  Test.findByIdAndUpdate(
    body.tid, {
      questions: body.qIds,
      totalQuestion: body.qIds.length
    }, {
      new: true
    },
    function (err, test) {
      if (err) {
        errorHandler(400, {
          msg: "Failed to merge test with questions",
          source: err
        }, res);


      } else {
        // console.log('Updated test:', test);
        logger.info(`\n  ${pid} : Test details were updated : ${req.body.tid}`)
        logger.debug(`\n  ${pid} : Test details were updated : ${req.body.tid}`)
        res.json(test);
      }
    }
  );
});

//--------------------------------------------
//    Fetching QuestionList
//--------------------------------------------
router.put('/questionList', function (req, res) {
  console.log('request from admin', req.body);

  Question.find({
    _id: req.body
  }, function (err, Questions) {
    if (err) {
      errorHandler(400, {
        msg: "Failed to load Questions",
        source: err
      }, res);
    } else {
      logger.debug(`\n  ${pid} : question list were fetched`)
      logger.info(`\n  ${pid} : questions list were fetched`)
      res.send(Questions);
    }
  });
});

//--------------------------------------------
//    Fetching Questions
//--------------------------------------------
router.get('/questions', (req, res, next) => {
  console.log('testId', req);
  Test.findById(req.query.testId, function (err, test) {
    if (err) {
      errorHandler(400, {
        msg: "Something went wrong",
        source: err
      }, res);
    } else if (test) {
      console.log('testquestions', test.questions);
      Question.find({
        _id: test.questions
      }, function (err, questions) {
        if (err) {
          errorHandler(400, {
            msg: "Failed to load Questions",
            source: err
          }, res);

        }
        else {
          logger.debug(`\n  ${pid} : questions were fetched`)
          logger.info(`\n  ${pid} : questions were fetched`)
          console.log(questions);
          res.send(questions);
        }
      });
    }
  });
});

//--------------------------------------------
//    Fetching testObject
//--------------------------------------------
router.get('/testObject', (req, res, next) => {
  //console.log('testId', req);
  Test.findById(req.query.testId, function (err, testObject) {
    if (err) {
      errorHandler(400, {
        msg: "Something went wrong",
        source: err
      }, res);
    } else {
      // console.log(questions);
      logger.info(`\n  ${pid} : testobject were fetched : ${req.query.testId}`)
      logger.debug(`\n  ${pid} : testobject were fetched : ${req.query.testId}`)
      res.json(testObject.duration);
    }
  });
});




//--------------------------------------------
//    Fetching all questions
//--------------------------------------------
router.get('/allquestions', function (req, res) {
  console.log("params", req.query);
  // text:req.query.searchq
  var obj = {};
  if (req.query.searchp != undefined && req.query.searchp != "") {
    // obj.text = req.query.searchp;
    obj.text = { $regex: new RegExp(req.query.searchp, 'i') };
    console.log(req.query.searchp, 'aaaaaaaa', obj.text)
  }

  Question.find(obj, function (err, questions) {
    if (err) {
      console.log(err);
    } else {
      console.log(questions);
      res.json(questions);
    }
  })
})

//--------------------------------------------
//    Fetching Category questions
//--------------------------------------------
router.get('/categoryQuestions', function (req, res) {
  // console.log("params",req.query);  
  // query:{ category:xyz , search:abc  }
  var obj = {};
  var obj1 = {
  };
  if (req.body.category != undefined && req.body.category != "") {
    // obj.text = req.query.searchp;
    obj.category = req.body.category;
    // console.log(req.query.category,'aaaaaaaa',obj.category)
  }
  if (req.body.search != undefined && req.body.search !== '') {
    // obj.text = req.query.searchp;
    obj1.text = { $regex: new RegExp(req.body.search, 'i') };
    // console.log(req.query.search,'aaaaaaaa',obj.text)
  }
  var categoryQuestions = [];
  console.log("object", obj)
  console.log("object12333", obj1)
  Test.find(obj, function (err, tests) {
    if (err) {
      console.log(err);
    } else {
      console.log("++++++++++++++++++++++++++++++++++++++");
      console.log(tests);

      for (var i = 0; i < tests.length; i++) {
        for (var j = 0; j < tests[i].questions.length; j++) {
          categoryQuestions.push(tests[i].questions[j]);
        }
      }
      if (obj1.text != undefined) {
        Question.find({ _id: { $in: categoryQuestions }, text: obj1.text }, function (err, questions) {
          if (err) {
            console.log(err);
          }
          else {
            // if(questions.text == obj1.text){
            //   console.log("questions search",questions.text,obj1.text);
            // }
            // console.log("questions",questions);
            res.json(questions);
          }
        })
      } else {
        Question.find({ _id: categoryQuestions }, function (err, questions) {
          if (err) {
            console.log(err);
          } else {
            res.json(questions);
          }
        })
      }
      // console.log(categoryQuestions);
    }
  })
});

router.post('/savepdf', function (req, res) {
  // console.log("++++++++++++++++++++++++++++++++++++++");        
  // console.log(req.body.doc.docDefinition);
  // console.log("++++++++++++++++++++++++++++++++++++++");  
  var data = req.body;
  var user = JSON.parse(data.user);
  var testPdf = {
    content: JSON.stringify(data.doc),
    testName: data.testDetails.testName,
    instituteName: data.testDetails.oName,
    subject: data.testDetails.subject,
    totalQuestion: data.doc.docDefinition.content[4].stack.length,
    duration: data.testDetails.examTime,
    class: data.testDetails.class,
    createdBy: user.id,
    acaYear: data.testDetails.acaYear
  };
  console.log("++++++++++++++++++++++++++++++++++++++");
  console.log(testPdf);
  console.log("++++++++++++++++++++++++++++++++++++++");
  TestPDF.create(testPdf, function (err, pdftest) {
    if (err) {
      console.log(err);

    } else {
      res.json({ success: true });
    }
  })
})

router.get('/getpdfs', function (req, res) {
  console.log("++++++++++++++++++++++++++++++++++++++");
  console.log(req.body);
  console.log("++++++++++++++++++++++++++++++++++++++");
  TestPDF.find({ createdBy: req.body.userId }, function (err, pdfs) {
    if (err) {
      console.log(err);
    } else {
      console.log(pdfs.length);
      SamplePDF.find({}, function (err, samplepdfs) {
        if (err) {
          console.log(err);
        } else {
          res.json({ pdf: pdfs, samplepdf: samplepdfs });
        }
      })
    }
  })
})



//----------------------//
//--Saving App Answers--//
//----------------------//
router.put('/appAnswer', function (req, res) {
  let idss=[];
  console.log('app answers from candidate', req.body);
  let quesids = [];
  // let ques=[]
  console.log(req.body.wronganswers)
  req.body.wronganswers.forEach(wr => {
    console.log('ouououououououououououou',wr)
    let wrongq={
      question:wr.question,
      answer:wr.answer
    }
    WrongAnswer.create(wrongq,function(err,wques){
      if (err) {
      errorHandler(400, { msg: "Failed to load Questions", source: err }, res);
    } else {
      logger.debug(`\n  ${pid} : question list were fetched`)
      logger.info(`\n  ${pid} : questions list were fetched`)
      console.log('{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}', wques);
      idss.push(wques._id);
      console.log('idss idss idss idss',wques._id)
      if(idss.length === req.body.wronganswers.length){
        console.log(idss.length, '===' ,req.body.wronganswers.length);
        callback1();
      }
    }
  })
  // .then(()=>{
    // console.log('idss idss idss idss',idss)
    // 
  })
  function callback1(){
    WrongAnswerUser.find({userID:req.body.userID},function(err,found){
          if (err) {
            errorHandler(400, { msg: "Failed to load Questions", source: err }, res);
          } else {
            if(found.length>0){
              console.log('found found found',found[0])
              idss.forEach(ids => {
                found[0].answersID.push(ids)
                console.log('llllllllllllllllllllllllll',found) 
              });
              WrongAnswerUser.findOneAndUpdate({userID:req.body.userID},found,{new:true},function(err,found1){
                if(err){

                } else {
                  console.log(found1);
                  found1.answersID=found[0].answersID;
                  console.log(found1);                  
                  found1.save();
                }
                // found.save();
            })
            } else {
              let wrongUser={
                userID: req.body.userID,
                answersID:idss
              }
              WrongAnswerUser.create(wrongUser,function(err,wUser){
                if (err) {
                  errorHandler(400, { msg: "Failed to load Questions", source: err }, res);
                } else {
                  logger.debug(`\n  ${pid} : question list were fetched`)
                  logger.info(`\n  ${pid} : questions list were fetched`)
                  console.log('kkkkkkkkkkkkkkkkkkkkkkkkk',wUser);
                }
              })
            }
            // logger.debug(`\n  ${pid} : question list were fetched`)
            // logger.info(`\n  ${pid} : questions list were fetched`)
            // console.log('{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}', wques);
            // idss.push(wques._id);
            // console.log('idss idss idss idss',wques._id)
          }
        })

  }
  let abc = (req.body.answer)
  // for(var i=0;i<req.body.answer.length;i++){
  //   let q = {
  //     text:req.body.answer[i].question.text,
  //     answer:req.body.answer[i].question.answer,

  //   }
  //   ques.push(req.body.answer[i].question);
  // }
  for (var i = 0; i < abc.length; i++) {
    quesids.push(abc[i]);
  }

  var answers = {
    answers: quesids,
    // ques:ques,S
    userID: req.body.userID,
    testID: req.body.testID,
    testName: req.body.testName,
    category: req.body.categoryQuestions
  }
  console.log('app answers saved', answers);

  AppTestAnswer.create(answers, function (err, savedAns) {
    if (err) {
      errorHandler(400, { msg: "Failed to load Questions", source: err }, res);
    } else {
      logger.debug(`\n  ${pid} : question list were fetched`)
      logger.info(`\n  ${pid} : questions list were fetched`)
      console.log('1111111111111111111111111111111111111111', savedAns)
      res.send(savedAns);
    }
  });
});


router.get('/appresult/:id', function (req, res) {
  console.log(req.params.id);
  AppTestAnswer.find({ userID: req.params.id }, function (err, result) {
    if (err) {
      errorHandler(400, { msg: "Failed to load Questions", source: err }, res);      
    } else {
      console.log("Resultsssss" + result);
      res.json(result);
    }

  })
});

router.get('/getwrongresponse/:id', function (req, res) {
  console.log(req.params.id);
  WrongAnswerUser.find({ userID: req.params.id }, function (err, result) {
    if (err) {
      errorHandler(400, { msg: "Failed to load Questions", source: err }, res);      
    } else {
      console.log("Wrong questions----------------" + result);
      // console.log(result[0]);
      res.json(result[0]);
    }

  })
});
router.put('/getwrongQuesAns/:id', function (req, res) {
  console.log(req.params.id);
  console.log('hellohellohello',req.body);
  WrongAnswer.find({ _id: req.body }, function (err, result) {
    if (err) {
      errorHandler(400, { msg: "Failed to load Questions", source: err }, res);      
    } else {
      console.log("Wrong questions----------------" + result);
      // console.log(result[0]);
      res.json(result);
    }

  })
});




router.get('/subjectcategory', function (req, res) {

  Test.find().distinct('category', function (err, category) {
    if (err) {
      errorHandler(400, { msg: "Failed to load Questions", source: err }, res);      
    }
    else {
      res.json(category);
    }
  })
})
router.put('/useraddquesans/:id', (req, res, next) => {

  console.log('/useraddquesans/:id',req.body)
  console.log('/useraddquesans/:id',req.params.id)
  let q={
    question:req.body.ques,
    answer:req.body.answer
  }
  WrongAnswer.create(q,function(err,created){
    if(err){
      errorHandler(400, { msg: "Failed to load Questions", source: err }, res);      
    } else {
      console.log('created',created);
      WrongAnswerUser.find({userID:req.params.id},function(err,found){
        if (err) {
          errorHandler(400, { msg: "Failed to load Questions", source: err }, res);
        } else {
          if(found.length>0){
            console.log('found found found',found[0])
              found[0].answersID.push(created._id)
              console.log('llllllllllllllllllllllllll',found) 
            WrongAnswerUser.findOneAndUpdate({userID:req.params.id},found,{new:true},function(err,found1){
              if(err){

              } else {
                console.log(found1);
                found1.answersID=found[0].answersID;
                console.log(found1);                  
                found1.save();
              }
              // found.save();
          })
          } else {
            let wrongUser={
              userID: req.body.userID,
              answersID:created._id
            }
            WrongAnswerUser.create(wrongUser,function(err,wUser){
              if (err) {
                errorHandler(400, { msg: "Failed to load Questions", source: err }, res);
              } else {
                logger.debug(`\n  ${pid} : question list were fetched`)
                logger.info(`\n  ${pid} : questions list were fetched`)
                console.log('kkkkkkkkkkkkkkkkkkkkkkkkk',wUser);
              }
            })
          }
          // logger.debug(`\n  ${pid} : question list were fetched`)
          // logger.info(`\n  ${pid} : questions list were fetched`)
          // console.log('{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}', wques);
          // idss.push(wques._id);
          // console.log('idss idss idss idss',wques._id)
        }
      })
    }
  })
});



module.exports = router;