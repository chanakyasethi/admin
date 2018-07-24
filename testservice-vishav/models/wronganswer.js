const mongoose = require('mongoose');

const wrongAnswerSchema = mongoose.Schema({

    question: {
        type : String
    },
    answer: {      
        type : String
    }
});

const WrongAnswerSchema = mongoose.model('WrongAnswerSchema', wrongAnswerSchema);

module.exports = WrongAnswerSchema;