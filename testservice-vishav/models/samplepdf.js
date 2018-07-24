const mongoose = require('mongoose');

//TODO: Figure out difference between "mongoose.Schema" vs "new mongoose.Schema"
const samplepdfSchema = mongoose.Schema({
    testName: {
        type: String,
        required: true,
        minlength: 1,
        unique: true
    },
    instituteName: {
        type: String,
        required: true,
        minlength: 1
    },

    subject: {
        type: String,
    },
    totalQuestion: {
        type: String
    },

    class: {
        type: String,
        minlength: 1
    },

    content: {
        type: String
    },
    acaYear: {
        type: String
    }

});

const sampleTestPDF = mongoose.model('SamplePDF', samplepdfSchema);

module.exports = sampleTestPDF;
