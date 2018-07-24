const _ = require('lodash');

var pruneInput = (obj, mongooseSchema, excludePaths) => {
  excludePaths = excludePaths || ['__v', '_id'];
  //   console.log('excludePaths', excludePaths);
  let schemaKeys = Object.keys(mongooseSchema.schema.paths);
  //   console.log('schemaKeys', schemaKeys);
  let schemaKeysOmitted = _.pullAll(schemaKeys, excludePaths);
  //   console.log('schemaKeysOmitted', schemaKeysOmitted);
  return _.pick(obj, schemaKeys);
};

module.exports.utils = { pruneInput };
