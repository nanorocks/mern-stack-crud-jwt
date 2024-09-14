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