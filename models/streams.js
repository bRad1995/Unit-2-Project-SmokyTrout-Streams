const mongoose = require('mongoose')

const streamSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: {type: String, required: true},
    fishing_quality: {type: String, required: true},
    accessibility: {type: String, required: true},
    recommended_flies: {type: String, required: true},
    about_this_stream: {type: String, required: true},
    imgIndex: {type: [String], required: false},
    imgOne: {type: [String], required: false},
    imgTwo: {type: [String], required: false},
    imgThree: {type: [String], required: false},
})

const Stream = mongoose.model('Stream', streamSchema)

module.exports = Stream