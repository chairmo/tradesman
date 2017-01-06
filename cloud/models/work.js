var mongoose = require('mongoose');

module.exports = mongoose.model('Work', new mongoose.Schema({
    artisan: { type: mongoose.Schema.Types.ObjectId, ref: 'Artisan' },
    name: { type: String, default: '' },
    surname: { type: String, default: '' },
    location: { type: String, default: '' },
    cell: { type: String, default: '' },
    description: { type: String, default: '' },
    rating: { type: Number },
    created_on: { type: Date, default: Date.now }
}));