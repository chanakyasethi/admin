const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// SourceApp Schema
const SourceAppSchema = mongoose.Schema({
  name: {
        type: String
        }
});

const SourceApp = module.exports = mongoose.model('SourceApp', SourceAppSchema);

module.exports.exists = function (sourceapp, callback) {
  const query = { name: sourceapp }
  SourceApp.findOne(query,callback)
}

module.exports.initialize = function (values,callback) {
  let value = [];
  for (var i = 0; i < values.length; i++) {
    value[i]= new SourceApp({
	  name: values[i],
  });
}
  SourceApp.insertMany(value)
    .then(function(nowExist) {
      callback(null, nowExist);
    })
    .catch(function(err) {
      callback(err);
    }); 
}
