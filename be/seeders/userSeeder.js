const mongoose = require('mongoose');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const { faker } = require('@faker-js/faker');

const seedUsers = async () => {
    try {
        await User.deleteMany(); // Clean the collection

        const salt = await bcrypt.genSalt(10);

        const users = [
            {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: await bcrypt.hash('secret', salt),
            },
            {
                name: faker.person.fullName(),
                email: faker.internet.email(),
                password: await bcrypt.hash('secret', salt),
            },
        ];

        await User.insertMany(users);
        console.log('Users Seeded!');
    } catch (err) {
        console.error('Error seeding users:', err);
        throw err;
    }
};

module.exports = seedUsers;
