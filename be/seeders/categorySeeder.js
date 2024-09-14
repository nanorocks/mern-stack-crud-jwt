const mongoose = require('mongoose');
const Category = require('../models/categoryModel');
const { faker } = require('@faker-js/faker');

const seedCategories = async () => {
    try {
        await Category.deleteMany(); // Clean the collection

        const categories = [
            {
                name: faker.commerce.department(),
                description: faker.lorem.sentence(),
                slug: faker.helpers.slugify(faker.commerce.department()),
                photo: faker.image.url(),
            },
            {
                name: faker.commerce.department(),
                description: faker.lorem.sentence(),
                slug: faker.helpers.slugify(faker.commerce.department()),
                photo: faker.image.url(),
            },
        ];

        await Category.insertMany(categories);
        console.log('Categories Seeded!');
    } catch (err) {
        console.error('Error seeding categories:', err);
        throw err;
    }
};

module.exports = seedCategories;
