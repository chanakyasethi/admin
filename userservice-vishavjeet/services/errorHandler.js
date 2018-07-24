var logger = require('../logger').logger
const config = require('../config/config');
var logging = (config.logging == 'true');
var process = require('process');
var multifile = (config.multiFileLog == 'true');
var pid = "";
if (!multifile) {
    pid = process.pid;
}

module.exports = function (code, errors, res) {


    var ErrorObj = {
        msg: errors.msg || "Null",
        debugMsg: errors.debugMsg || "Null",
        source: errors.source || {}
    }
    logger.error(`\n PID - ${pid}`)
    logger.error(`${code} - ${ErrorObj.msg}`)
    res.status(code || 400).json(ErrorObj);

}