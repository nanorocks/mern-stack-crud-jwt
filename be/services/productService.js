const Product = require('../models/productModel');

exports.createProduct = async (productData) => {
    const product = new Product(productData);
    return await product.save();
};

exports.getAllProducts = async () => {
    const product = await Product.find()
    console.log(product);
    return await product.find();
};