const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const config = require('../config/config')

exports.getAllUsers = async () => {
    const user = await User.find()
    console.log(user);
    return await User.find();
};

const createToken = (user) => {
    return jwt.sign({ id: user._id, email: user.email }, config.jwtSecret, {
        expiresIn: config.jwtExpiresIn,
    });
};

// Register a new user
exports.registerUser = async (userData) => {
    const user = new User(userData);
    await user.save();
    const token = createToken(user);
    return { user, token };
};

// Login a user
exports.loginUser = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        throw new Error('Invalid email or password');
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        throw new Error('Invalid email or password');
    }

    const token = createToken(user);
    return { user, token };
};