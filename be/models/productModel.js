const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    slug: { type: String, required: true, unique: true },
    photo: {type: String, required: false }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);