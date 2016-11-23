var mongoose = require('mongoose');

module.exports = mongoose.model('Artisan', new mongoose.Schema({
    name: { type: String, default: '' },
    surname: { type: String, default: '' },
    company: { type: String, default: '' },
    cell: { type: String, default: '' },
    email: { type: String, default: '' },
    experience: { type: Number, default: 0 },
    capacity: { type: Number, default: 0 },
    skill: { type: String, default: '' },
    created_on: { type: Date, default: Date.now }
}));