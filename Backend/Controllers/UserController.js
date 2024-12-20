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

const deleteUserProfile = async (req, res) => {
    const userService = require('../Services/UserService'); // Lazy loading
    try {
        await userService.deleteUserProfile(req.userId);
        res.status(200).json({ msg: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

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

const getUserOrders = async (req, res) => {
    const userService = require('../Services/UserService'); // Lazy loading
    try {
        const orders = await userService.getUserOrders(req.userId);
        res.status(200).json({ orders });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

const userService = require('../Services/UserService'); // Lazy loading

const createUserAddress = async (req, res) => {
    try {
        const { country, city, postalCode, addressLine1, addressLine2 } = req.body;
        const userId = req.userId; // Extract userId from the middleware
        const address = await userService.createAddress(userId, { country, city, postalCode, addressLine1, addressLine2 });

        return res.status(201).json({
            success: true,
            message: "Address successfully added.",
            data: address
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};

const updateUserAddress = async (req, res) => {
    try {
        const { country, city, postalCode, addressLine1, addressLine2 } = req.body;
        const userId = req.userId; // Extract userId from the middleware

        const address = await userService.updateAddress(userId, { country, city, postalCode, addressLine1, addressLine2 });

        if (!address) {
            return res.status(404).json({ success: false, message: "Address not found." });
        }

        return res.status(200).json({ success: true, message: "Address updated.", data: address });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: err.message
        });
    }
};


module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    deleteUserProfile,
    changeUserPassword,
    getUserOrders,
    createUserAddress,
    updateUserAddress
};
