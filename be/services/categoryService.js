const Category = require('../models/categoryModel');

exports.createCategory = async (categoryData) => {
    const Category = new Category(categoryData);
    return await Category.save();
};

exports.getAllCategorys = async () => {
    const Category = await Category.find()
    console.log(Category);
    return await Category.find();
};