var mongoose = require('mongoose');

module.exports = mongoose.model('Artisan', new mongoose.Schema({
    CreatedOn: { type: Date, default: Date.now }
}));