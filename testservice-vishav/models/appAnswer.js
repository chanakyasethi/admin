const mongoose = require('mongoose');

const appTestAnswerSchema = mongoose.Schema({

    answers: [
        type = String
    ],
    userID: {
        type: String
    },
    testID: {
        type: String
    },
    testName: {
        type: String
    },
    testType: {
        type: String
    }
});

const AppTestAnswer = mongoose.model('AppTestAnswer', appTestAnswerSchema);

module.exports = AppTestAnswer;
