// To handle Circular dependency caused because multiple modules are handling too much logic. 

// Apart from this I have also added LAzy Loading 


// For example, to get Admin id, email and password.
// 1. AdminRoute.js imports functions from AdminController.js.
// 2. AdminController.js may import or reference AuthMiddleware.js or other files that, in turn, import the same AdminRoute.js or another related module.
// 3. This causes Node.js to load one module before the other is fully defined, leading to incomplete exports(such as [object Undefined] for route callbacks).

const jwt = require('jsonwebtoken');
const { Menu } = require('../models/MenuModel');

// Register Admin service
const registerAdmin = async ({ name, email, password }) => {
    const { Admin } = require('../models/AdminModel'); // Lazy loading
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) throw new Error('Admin already exists');

    const newAdmin = new Admin({ name, email, password });
    return newAdmin.save();
};

// Login Admin service
const loginAdmin = async (email, password) => {
    const { Admin } = require('../models/AdminModel'); // Lazy loading
    const admin = await Admin.findOne({ email });

    if (!admin) throw new Error("Admin does not exist");
    if (password !== admin.password) throw new Error("Invalid credentials");

    const token = jwt.sign({ AdminId: admin._id, Adminname: admin.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

// Get Admin profile
const getAdminProfile = async (AdminId) => {
    const { Admin } = require('../models/AdminModel'); // Lazy loading
    const admin = await Admin.findById(AdminId);
    if (!admin) throw new Error("Admin not found");

    return {
        name: admin.name,
        email: admin.email,
        createdAt: admin.createdAt
    };
};

// Update Admin profile
const updateAdminProfile = async (AdminId, { name, email }) => {
    const { Admin } = require('../models/AdminModel'); // Lazy loading
    const updatedAdmin = await Admin.findByIdAndUpdate(AdminId, { name, email }, { new: true, runValidators: true });
    if (!updatedAdmin) throw new Error("Admin not found");

    return updatedAdmin;
};

// Delete Admin profile
const deleteAdminProfile = async (AdminId) => {
    const { Admin } = require('../models/AdminModel'); // Lazy loading
    const admin = await Admin.findByIdAndDelete(AdminId);
    if (!admin) throw new Error("Admin not found");

    return admin;
};

// Change Admin password
const changeAdminPassword = async (AdminId, oldPassword, newPassword) => {
    const { Admin } = require('../models/AdminModel'); // Lazy loading
    const admin = await Admin.findById(AdminId);
    if (!admin) throw new Error("Admin not found");
    if (oldPassword !== admin.password) throw new Error("Incorrect current password");

    // Update with plain text password
    admin.password = newPassword;
    return admin.save();
};

// Admin function to add a menu item
const addMenuService = async (menuData) => {
    const menuItem = new Menu(menuData);
    return await menuItem.save();
};

// Admin function to update a menu item
const updateMenuService = async (id, menuData) => {
    const menuItem = await Menu.findById(id);
    if (!menuItem) throw new Error('Menu item not found');

    Object.assign(menuItem, menuData);
    return await menuItem.save();
};


module.exports = {
    registerAdmin,
    loginAdmin,
    getAdminProfile,
    updateAdminProfile,
    deleteAdminProfile,
    changeAdminPassword,
    addMenuService,
    updateMenuService
};
