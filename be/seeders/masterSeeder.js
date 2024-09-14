const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userSeeder = require('./userSeeder');
const categorySeeder = require('./categorySeeder');
const productSeeder = require('./productSeeder');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
}).then(() => {
    console.log('Connected to MongoDB');
    runSeeders();
}).catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

// Function to run all seeders
const runSeeders = async () => {
    try {
        await userSeeder();
        await categorySeeder();
        await productSeeder();
        console.log('All seeders have been successfully run!');
        process.exit();
    } catch (err) {
        console.error('Error running seeders:', err);
        process.exit(1);
    }
};
