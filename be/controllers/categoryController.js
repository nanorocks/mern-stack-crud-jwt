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
