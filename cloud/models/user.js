var mongoose = require('mongoose');

module.exports = mongoose.model('User', new mongoose.Schema({
    CreatedOn: { type: Date, default: Date.now }
}));