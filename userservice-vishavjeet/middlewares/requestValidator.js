const SourceApp = require('../models/sourceapp');

function requestValidator(req, res, next) {
  SourceApp.exists(req.headers.app, (err, appExists) => {
    // console.log('hurray reached requestValidator method');
    if (err) throw err;
    if (!appExists) {
      console.log('Not a valid user!');
    }
    if (appExists) {
      console.log('Hurray I am valid user!');
      next();
    }
  });
}

module.exports = requestValidator;
