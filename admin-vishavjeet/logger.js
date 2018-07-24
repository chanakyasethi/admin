const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');
const config = require('./config/config');
var time = () => (new Date());
const consoleConfig = [
  new winston.transports.Console({
    'colorize': true
  })
];

const createLogger = new winston.Logger({
  'transports': consoleConfig
});

// const logger = winston.createLogger({
//   level: 'info',
//   transports: [
//     new winston.transports.Console(),
//     new winston.transports.File({ filename: 'combined.log' })
//   ]
// });

const logger = new winston.Logger();
if (config.multiFileLog == 'true') {
  logger.add(winstonRotator, {
    'name': 'log-file',
    'level': config.logLevel,
    'filename': './logs/log-' + process.pid + '-%DATE%.log',
    'json': false,
    'datePattern': 'WW',
    'prepend': true,
    'maxSize': '50m',
    'timestamp': time,
    zippedArchive: true,
    tailable: false
  });
} else {
  logger.add(winstonRotator, {
    'name': 'error-file',
    'level': config.logLevel,
    'filename': './logs/log-%DATE%.log',
    'json': false,
    'datePattern': 'WW',
    'prepend': true,
    'maxSize': '50m',
    // 'maxFiles': '5',
    'timestamp': time,
    zippedArchive: true,
    tailable: false

  });
}

module.exports = {
  'logger': logger
};