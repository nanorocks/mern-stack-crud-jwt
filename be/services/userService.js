const User = require('../models/userModel');

exports.createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

exports.getAllUsers = async () => {
    const user = await User.find()
    console.log(user);
    return await User.find();
};