const Product = require('../models/productModel');
const mongoose = require('mongoose');

exports.createProduct = async (productData) => {
    const product = new Product(productData);
    return await product.save();
};

exports.getAllProducts = async () => {
    const products = await Product.find()
    console.log(products);
    return products;
};

exports.getProductByIdOrSlug = async (idOrSlug) => {
    let product;

    // Check if the idOrSlug is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
        // If valid ObjectId, search by _id
        product = await Product.findById(idOrSlug);
    } else {
        // Otherwise, search by slug
        product = await Product.findOne({ slug: idOrSlug });
    }

    if (!product) {
        throw new Error('Product not found');
    }

    return product;
};

// Delete a product by ID or slug
exports.deleteProductByIdOrSlug = async (idOrSlug) => {
    let product;

    // Check if the idOrSlug is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
        // If valid ObjectId, search and delete by _id
        product = await Product.findByIdAndDelete(idOrSlug);
    } else {
        // Otherwise, search and delete by slug
        product = await Product.findOneAndDelete({ slug: idOrSlug });
    }

    if (!product) {
        throw new Error('Product not found');
    }

    return product;
};


// Update a product by ID or slug
exports.updateProductByIdOrSlug = async (idOrSlug, updateData) => {
    let product;

    // Check if the idOrSlug is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
        // If valid ObjectId, search and update by _id
        product = await Product.findByIdAndUpdate(idOrSlug, updateData, {
            new: true, // Return the updated document
            runValidators: true, // Ensure validation is run for updates
        });
    } else {
        // Otherwise, search and update by slug
        product = await Product.findOneAndUpdate({ slug: idOrSlug }, updateData, {
            new: true,
            runValidators: true,
        });
    }

    if (!product) {
        throw new Error('Product not found');
    }

    return product;
};