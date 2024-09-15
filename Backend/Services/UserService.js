// To handle Circular dependency caused because multiple modules are handling too much logic. 

// Apart from this I have also added LAzy Loading 


// For example, to get user id, email and password.
// 1. UserRoute.js imports functions from UserController.js.
// 2. UserController.js may import or reference AuthMiddleware.js or other files that, in turn, import the same UserRoute.js or another related module.
// 3. This causes Node.js to load one module before the other is fully defined, leading to incomplete exports(such as [object Undefined] for route callbacks).
 

const jwt = require('jsonwebtoken');

// Register user service
const registerUser = async ({ name, email, password }) => {
    const { User } = require('../models/UserModel'); // Lazy loading
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new Error('User already exists');

    const newUser = new User({ name, email, password });
    return newUser.save();
};

// Login user service
const loginUser = async (email, password) => {
    const { User } = require('../models/UserModel'); // Lazy loading
    const user = await User.findOne({ email });

    if (!user) throw new Error("User does not exist");
    if (password !== user.password) throw new Error("Invalid credentials");

    const token = jwt.sign({ userId: user._id, username: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

// Get user profile
const getUserProfile = async (userId) => {
    const { User } = require('../models/UserModel'); // Lazy loading
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");

    return {
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
    };
};

// Update user profile
const updateUserProfile = async (userId, { name, email }) => {
    const { User } = require('../models/UserModel'); // Lazy loading
    const updatedUser = await User.findByIdAndUpdate(userId, { name, email }, { new: true, runValidators: true });
    if (!updatedUser) throw new Error("User not found");

    return updatedUser;
};

// Delete user profile
const deleteUserProfile = async (userId) => {
    const { User } = require('../models/UserModel'); // Lazy loading
    const user = await User.findByIdAndDelete(userId);
    if (!user) throw new Error("User not found");

    return user;
};

// Change user password
const changeUserPassword = async (userId, oldPassword, newPassword) => {
    const { User } = require('../models/UserModel'); // Lazy loading
    const user = await User.findById(userId);
    if (!user) throw new Error("User not found");
    if (oldPassword !== user.password) throw new Error("Incorrect current password");

    // Update with plain text password
    user.password = newPassword;
    return user.save();
};

// Get user orders
const getUserOrders = async (userId) => {
    const Order = require('../models/OrderModel'); // Lazy loading
    const orders = await Order.find({ userId });
    if (!orders.length) throw new Error("No orders found");

    return orders;
};

module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
    changeUserPassword,
    getUserOrders
};
