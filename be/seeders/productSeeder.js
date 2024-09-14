const mongoose = require('mongoose');
const Product = require('../models/productModel');
const { faker } = require('@faker-js/faker');

const seedProducts = async () => {
    try {
        await Product.deleteMany(); // Clean the collection

        const products = [
            {
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                slug: faker.helpers.slugify(faker.commerce.productName()),
                photo: faker.image.url(),
            },
            {
                name: faker.commerce.productName(),
                description: faker.commerce.productDescription(),
                slug: faker.helpers.slugify(faker.commerce.productName()),
                photo: faker.image.url(),
            },
        ];

        await Product.insertMany(products);
        console.log('Products Seeded!');
    } catch (err) {
        console.error('Error seeding products:', err);
        throw err;
    }
};

module.exports = seedProducts;
