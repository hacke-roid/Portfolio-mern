const mongoose = require('mongoose');

const DataSchema = mongoose.Schema({
    name: String,
    email: String,
    number: String,
    subject: String,
    message: String,
})

const DataModel = mongoose.model('users', DataSchema);

module.exports = DataModel;