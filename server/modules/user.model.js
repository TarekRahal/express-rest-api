// create mongoose schema
const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    login: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, requires: true }
});

var User = mongoose.model('User', userSchema);
module.exports = User;