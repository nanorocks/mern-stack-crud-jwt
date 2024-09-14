const categoryService = require('../services/categoryService');

exports.createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getCategoryByIdOrSlug = async (req, res) => {
    try {
        const idOrSlug = req.params.idOrSlug;
        const category = await categoryService.getCategoryByIdOrSlug(idOrSlug);
        res.status(200).json(category);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.deleteCategoryByIdOrSlug = async (req, res) => {
    try {
        const idOrSlug = req.params.idOrSlug;
        const category = await categoryService.deleteCategoryByIdOrSlug(idOrSlug);
        res.status(200).json({ message: 'Category deleted successfully', category });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

exports.updateCategoryByIdOrSlug = async (req, res) => {
    try {
        const idOrSlug = req.params.idOrSlug;
        const updateData = req.body; // Assuming the updated data is passed in the body
        const category = await categoryService.updateCategoryByIdOrSlug(idOrSlug, updateData);
        res.status(200).json({ message: 'Category updated successfully', category });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};