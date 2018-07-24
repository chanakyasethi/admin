const express = require('express');
const router = express.Router();
const request = require('request');
// const config = require('../config/database');
const _ = require('lodash');

const config = require('../config/config');
const util = require('../utility/utility');

//--------------------------------------------
//+++++++++++++++++++++++++++++++++++++++++++
//-------------------------------------------

const winston = require('../logger').logger;
var logging = (config.logging == 'true');
var multifile = (config.multiFileLog == 'true');
var process = require('process');
var pid = "";
if (!multifile) {
  pid = process.pid;
}

//---------------------------------------------------
//    Recording candidate response
//---------------------------------------------------

router.post('/response', function (req, res) {
  console.log('object from front-end:', req.body);
  request.post(
    {
      url: config.RESULT_SERVICE_PORT + '/response/partialResponse',
      body: req.body,
      json: true
    },
    function (err, response, body) {
      if (err) {

        winston.error(`\nError Message: - ${pid} --${err.stack}`);


        // res.json(err);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nresponse get successfully\n')
            winston.debug('-' + pid + '--' + '\nresponse is here :' + response.body + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});

//=====================================================================
//       get Test state of particular Test
//=====================================================================
router.put('/state/:id', function (req, res) {
  request.put(
    {
      url: config.RESULT_SERVICE_PORT + '/response/teststate/' + req.params.id,
      body: req.body,
      json: true
    },
    function (err, response) {
      if (err) {

        winston.error(`\nError Message: - ${pid} --${err.stack}`);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });

      } else {

        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else if (response.statusCode < 400) {

            winston.info('-' + pid + '--' + '\ntest state get successfully\n')
            winston.debug('-' + pid + '--' + '\n tests state :' + response.body + '\n');

            res.json(response.body);
          }
        });
      }
    }
  );
});




router.get('/result/:id', function (req, res) {
  console.log('test', req.params.id);
  request.get(
    {
      url:
        config.RESULT_SERVICE_PORT +
        '/response/result/' +
        req.params.id +
        '?candidate=' +
        req.query.candidate,
      json: true
    },
    function (err, response, body) {
      if (err) {

        winston.error(`\nError Message: - ${pid} --${err.stack}`);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        console.log('response is here', response.body);
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else {
            winston.info('-' + pid + '--' + '\nresult get successfully\n')
            winston.debug('-' + pid + '--' + '\n result is here :' + response.body + '\n');
            res.json(response.body);
          }
        });
      }
    }
  );
});

router.post('/computeResult', function (req, res) {
  console.log('response here', req.body);
  request.post(
    {
      url: config.RESULT_SERVICE_PORT + '/response/computeResult',
      body: req.body,
      json: true
    },
    function (err, response, body) {
      if (err) {
        winston.error(`\nError Message: - ${pid} --${err.stack}`);
        res.status('500').json({ msg: 'Something went wrong Please try again!!!', error: err });
      } else {
        util.responseFound(response, callback => {
          if (!callback) {
            winston.error('internal server: ', response.body.msg);
            res.status(400).send(response.body);
          } else if (response.statusCode < 400) {

            winston.info('-' + pid + '--' + '\nresult computation done successfully\n')
            winston.debug('-' + pid + '--' + '\n result computation :' + response.body + '\n');

            res.json(response.body);
          }
        });
      }
    }
  );
});

module.exports = router;
