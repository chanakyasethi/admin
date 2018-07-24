var env = process.env.NODE_ENV || 'dev';

console.log('Starting server with environment:', env);

if (env === 'dev' || env === 'test') {
  var config = require('./config.json');

  var envConfig = config[env];

  //   Object.keys(envConfig).forEach((key) => {
  //     process.env[key] = envConfig[key];
  //   });
  module.exports = envConfig;
} else if (env === 'production') {
  module.exports = {
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    ALLOW_RESUME: process.env.ALLOW_RESUME,
  };
}
