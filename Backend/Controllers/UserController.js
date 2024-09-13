// Register a new user
const registerUser = async (req, res) => {
    const userService = require('../Services/UserService'); // Lazy loading
    const { name, email, password } = req.body;
    try {
        await userService.registerUser({ name, email, password });
        res.status(201).json({ msg: "User registered successfully" });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

// Login user
const loginUser = async (req, res) => {
    const userService = require('../Services/UserService'); // Lazy loading
    const { email, password } = req.body;

    try {
        const token = await userService.loginUser(email, password);
        res.json({ token, msg: "Login successful" });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

// Get user profile
const getUserProfile = async (req, res) => {
    const userService = require('../Services/UserService'); // Lazy loading
    try {
        const user = await userService.getUserProfile(req.userId);  // Use req.userId to fetch user
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// Update user profile
const updateUserProfile = async (req, res) => {
    const userService = require('../Services/UserService'); // Lazy loading
    try {
        const { name, email } = req.body;
        const updatedUser = await userService.updateUserProfile(req.userId, { name, email });
        res.status(200).json({ msg: "User updated successfully", user: updatedUser });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// Delete user profile
const deleteUserProfile = async (req, res) => {
    const userService = require('../Services/UserService'); // Lazy loading
    try {
        await userService.deleteUserProfile(req.userId);
        res.status(200).json({ msg: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

// Change user password
const changeUserPassword = async (req, res) => {
    const userService = require('../Services/UserService'); // Lazy loading
    const { oldPassword, newPassword } = req.body;
    try {
        await userService.changeUserPassword(req.userId, oldPassword, newPassword);
        res.status(200).json({ msg: "Password updated successfully" });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

// Get user orders
const getUserOrders = async (req, res) => {
    const userService = require('../Services/UserService'); // Lazy loading
    try {
        const orders = await userService.getUserOrders(req.userId);
        res.status(200).json({ orders });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
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
