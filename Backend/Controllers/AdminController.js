const registerAdmin = async (req, res) => {
    const AdminService = require('../Services/AdminService'); // Lazy loading
    const { name, email, password } = req.body;
    try {
        await AdminService.registerAdmin({ name, email, password });
        res.status(201).json({ msg: "Admin registered successfully" });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

const loginAdmin = async (req, res) => {
    const AdminService = require('../Services/AdminService'); // Lazy loading
    const { email, password } = req.body;

    try {
        const token = await AdminService.loginAdmin(email, password);
        res.json({ token, msg: "Login successful" });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

const getAdminProfile = async (req, res) => {
    const AdminService = require('../Services/AdminService'); // Lazy loading
    try {
        const admin = await AdminService.getAdminProfile(req.AdminId);  // Use req.AdminId to fetch Admin
        if (!admin) {
            return res.status(404).json({ msg: "Admin not found. Unable to fetch profile." });
        }
        res.status(200).json(admin);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

const updateAdminProfile = async (req, res) => {
    const AdminService = require('../Services/AdminService'); // Lazy loading
    try {
        const { name, email } = req.body;
        const updatedAdmin = await AdminService.updateAdminProfile(req.AdminId, { name, email });
        if (!updatedAdmin) {
            return res.status(404).json({ msg: "Admin not found. Unable to update profile." });
        }
        res.status(200).json({ msg: "Admin updated successfully", Admin: updatedAdmin });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

const deleteAdminProfile = async (req, res) => {
    const AdminService = require('../Services/AdminService'); // Lazy loading
    try {
        await AdminService.deleteAdminProfile(req.AdminId);
        res.status(200).json({ msg: 'Admin deleted successfully' });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

const changeAdminPassword = async (req, res) => {
    const AdminService = require('../Services/AdminService'); // Lazy loading
    const { oldPassword, newPassword } = req.body;
    try {
        await AdminService.changeAdminPassword(req.AdminId, oldPassword, newPassword);
        res.status(200).json({ msg: "Password updated successfully" });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

module.exports = {
    registerAdmin,
    loginAdmin,
    getAdminProfile,
    updateAdminProfile,
    deleteAdminProfile,
    changeAdminPassword,
};
