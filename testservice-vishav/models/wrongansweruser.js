const mongoose = require('mongoose');

const wrongAnswerUserSchema = mongoose.Schema({

    userID: {
        type : mongoose.Schema.Types.ObjectId
    },
    answersID: [   
        type = mongoose.Schema.Types.ObjectId
    ]
});

const WrongAnswerUserSchema = mongoose.model('WrongAnswerUserSchema', wrongAnswerUserSchema);

module.exports = WrongAnswerUserSchema;