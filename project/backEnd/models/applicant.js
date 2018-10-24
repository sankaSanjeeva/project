var mongoose = require('mongoose');

var constructorSchema = new mongoose.Schema({
    
    fName: String,
    mName: String,
    lName: String,
    line1: String,
    line2: String,
    line3: String,
    city: String,
    distric: String,
    birthday: Date,
    gender: String,
    nic: String,
    email: String,
    phone: Number,
    cType: String
});

module.exports = mongoose.model('applicant', constructorSchema);