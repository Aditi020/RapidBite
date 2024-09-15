const express = require("express");
const {
    registerAdmin,
    loginAdmin,
    getAdminProfile,
    updateAdminProfile,
    changeAdminPassword,
    deleteAdminProfile,
    addMenuItem,
    updateMenuItem
} = require("../Controllers/AdminController");

const { adminMiddleware } = require("../Middlewares/Auth");

const router = express.Router();

// Admin authentication routes
router.post("/register", registerAdmin);

router.post("/login", loginAdmin);

// Admin profile routes (protected)
router.get("/profile", adminMiddleware, getAdminProfile);

router.put("/profile/update", adminMiddleware, updateAdminProfile);

router.put("/profile/change-password", adminMiddleware, changeAdminPassword);

router.delete("/profile/delete", adminMiddleware, deleteAdminProfile);

// Menu management routes (protected)
router.post('/menu/add', adminMiddleware, addMenuItem);
router.put('/menu/:id', adminMiddleware, updateMenuItem);

module.exports = router;
