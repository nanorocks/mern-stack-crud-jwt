const productService = require('../services/productService');

exports.createProduct = async (req, res) => {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllProducts = async (req, res) => {
    try {
        const products = await productService.getAllProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getProductByIdOrSlug = async (req, res) => {
    try {
        const idOrSlug = req.params.idOrSlug;
        const product = await productService.getProductByIdOrSlug(idOrSlug);
        res.status(200).json(product);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteProductByIdOrSlug = async (req, res) => {
    try {
        const idOrSlug = req.params.idOrSlug;
        const product = await productService.deleteProductByIdOrSlug(idOrSlug);
        res.status(200).json({ message: 'Product deleted successfully', product });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.updateProductByIdOrSlug = async (req, res) => {
    try {
        const idOrSlug = req.params.idOrSlug;
        const updateData = req.body; // Assuming the updated data is passed in the body
        const product = await productService.updateProductByIdOrSlug(idOrSlug, updateData);
        res.status(200).json({ message: 'Product updated successfully', product });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};