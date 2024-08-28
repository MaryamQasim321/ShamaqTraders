// Models/category.js
const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Category', CategorySchema);
