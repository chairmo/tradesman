var mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema({
    username: { type: String, default: '' },
    password: { type: String, default: '' },
    created_on: { type: Date, default: Date.now }
}));