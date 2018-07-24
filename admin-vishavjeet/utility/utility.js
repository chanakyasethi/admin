module.exports.responseFound = function (
    responseStatus,
    callback
) {
    // check condition for status code
    console.log('sfdghkjl');
    if (responseStatus.statusCode > 399) {
        console.log('false');
        callback(false);
    } else if (responseStatus.statusCode < 400) {
        console.log('true');
        callback(true);
    }
};
