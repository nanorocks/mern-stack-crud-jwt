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

exports.deleteCategoryByIdOrSlug = async (idOrSlug) => {
    let category;

    // Check if the idOrSlug is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
        // If valid ObjectId, search and delete by _id
        category = await Category.findByIdAndDelete(idOrSlug);
    } else {
        // Otherwise, search and delete by slug
        category = await Category.findOneAndDelete({ slug: idOrSlug });
    }

    if (!category) {
        throw new Error('Category not found');
    }

    return category;
};

// Update a category by ID or slug
exports.updateCategoryByIdOrSlug = async (idOrSlug, updateData) => {
    let category;

    // Check if the idOrSlug is a valid ObjectId
    if (mongoose.Types.ObjectId.isValid(idOrSlug)) {
        // If valid ObjectId, search and update by _id
        category = await Category.findByIdAndUpdate(idOrSlug, updateData, {
            new: true, // Return the updated document
            runValidators: true, // Ensure validation is run for updates
        });
    } else {
        // Otherwise, search and update by slug
        category = await Category.findOneAndUpdate({ slug: idOrSlug }, updateData, {
            new: true,
            runValidators: true,
        });
    }

    if (!category) {
        throw new Error('Category not found');
    }

    return category;
};