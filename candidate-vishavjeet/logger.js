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
// if (!multifile) {
//     pid = process.pid;
// }

const logger = createLogger;
if (config.multiFileLog == 'true') {
    logger.add(winstonRotator, {
        'name': 'error-log-file',
        'level': config.logLevel,
        'filename': './logs/file- ' + pid + ' %DATE%.log',
        'json': false,
        'datePattern': 'WW',
        'prepend': true,
        'maxSize': '10m',
        'timestamp': time,
        zippedArchive: true,
    });
}
else {
    logger.add(winstonRotator, {
        'name': 'error-log-file',
        'level': config.logLevel,
        'filename': './logs/file-%DATE%.log',
        'json': false,
        'datePattern': 'WW',
        'prepend': true,
        'maxSize': '50m',
        'timestamp': time,
        zippedArchive: true,
    });

}

module.exports = {
    'logger': logger
};