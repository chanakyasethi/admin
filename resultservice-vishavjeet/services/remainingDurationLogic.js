const testInstance = require('../models/testInstance');
const resultRoute = require('../routes/result');
const mongoose = require('mongoose');
const request = require('request');
const _ = require('lodash');

const config = require('../config/config');
const testRoute = 'https://testservice-cfe.herokuapp.com/testroutes/';

module.exports.calculateRemainingTime = function (
  allocatedTime,
  timeSpent,
  callback
) { };
