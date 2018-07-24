// module.exports = {
//   database: 'mongodb://localhost:27017/candidate',
//   secret: 'cfeindia'
// };

const config = require('./../config/config');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(config.MONGODB_URI).then(
  () => {
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
    console.log('Connected to database:', config.MONGODB_URI);
  },
  err => {
    /** handle initial connection error */
    console.log('Error connecting to database: ', err);
  }
);

module.exports = { mongoose };
