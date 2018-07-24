const mongoose = require('mongoose');

//TODO: Figure out difference between "mongoose.Schema" vs "new mongoose.Schema"
const testpdfSchema = mongoose.Schema({
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
    createdOn: {
        type: Date,
        default: Date.now
    },
    subject: {
        type: String,
    },
    totalQuestion: {
        type: String
    },
    duration: {
        type: Number,
        required: true
    },
    class: {
        type: String,
        minlength: 1
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
    },
    content: {
        type: String
    },
    acaYear: {
        type: String
    }

});

const TestPDF = mongoose.model('TestPDF', testpdfSchema);

module.exports = TestPDF;
