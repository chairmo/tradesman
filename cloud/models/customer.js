var mongoose = require('mongoose');

module.exports = mongoose.model('Customer', new mongoose.Schema({
    name: { type: String, default: '' },
    surname: { type: String, default: '' },
    company: { type: String, default: '' },
    location: { type: String, default: '' },
    cell: { type: String, default: '' },
    email: { type: String, default: '' },
    experience: { type: Number, default: 0 },
    capacity: { type: Number, default: 0 },
    skill: { type: String, default: '' },
    created_on: { type: Date, default: Date.now }
}));