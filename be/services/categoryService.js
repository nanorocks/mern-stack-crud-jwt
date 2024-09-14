const Category = require('../models/categoryModel');
const mongoose = require('mongoose');

exports.createCategory = async (categoryData) => {
    const category = new Category(categoryData);
    return await category.save();
};

exports.getAllCategories = async () => {
    const categories = await Category.find()
    console.log(categories);

    return categories;
};

exports.getCategoryByIdOrSlug = async (idOrSlug) => {

    let category;

    // Check if the idOrSlug is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
        // If valid ObjectId, search by _id
        category = await Category.findById(idOrSlug);
    } else {
        // Otherwise, search by slug
        category = await Category.findOne({ slug: idOrSlug });
    }

    if (!category) {
        throw new Error('Category not found');
    }

    return category;
};

