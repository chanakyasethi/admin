const dotenv = require('dotenv');

const env = process.env.NODE_ENV || 'dev';
console.log('Starting server with environment:', env);

result = dotenv.config();
if (result.error) {
  console.log('No .env file found!');
  // throw result.error;
}
const localConfig = result.parsed || {};
console.log('Loaded local config:', localConfig);

/*
NOTE: process.env has all the config variables required at the moment. 
Sequence of loading the config above ensures that ones in override file overrides the ones provided by local .env file.
*/
const finalConfig = process.env;
// const finalConfig = _.merge({}, localConfig, overrideConfig);
// console.log('Final config', finalConfig);
// console.log('Process env after loading local config:', process.env);
module.exports = finalConfig;
