const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Optional: adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Product', ProductSchema);
