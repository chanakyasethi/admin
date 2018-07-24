const winston = require('winston');
const winstonRotator = require('winston-daily-rotate-file');
const config = require('./config/config');
var time = () => (new Date());
const consoleConfig = [
  new winston.transports.Console({
    'colorize': true
  })
];



const createLogger = new winston.Logger();

var pid = process.pid;

const logger = createLogger;
if (config.multiFileLog == 'true') {
  logger.add(winstonRotator, {
    'name': 'error-file',
    'level': config.logLevel,
    'filename': './logs/error-%DATE%.log',
    'json': false,
    'datePattern': 'DD-MM-YYYY',
    'prepend': true,
    'maxSize': '50m',
    'timestamp': time,
    zippedArchive: true,
  });
}
else {
  logger.add(winstonRotator, {
    'name': 'error-file',
    'level': config.logLevel,
    'filename': './logs/error-%DATE%.log',
    'json': false,
    'datePattern': 'DD-MM-YYYY',
    'prepend': true,
    'maxSize': '50m',
    'timestamp': time,
    zippedArchive: true,
  });


}
module.exports = {
  'logger': logger
};
