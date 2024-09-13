const mongoose = require('mongoose');
const config = require('../config/config');

const connectDatabase = async () => {
    try {
        await mongoose.connect(config.mongoUri, {
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Database connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDatabase;