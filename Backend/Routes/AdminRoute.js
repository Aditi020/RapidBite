const express = require("express");
const {
    registerAdmin,
    loginAdmin,
    getAdminProfile,
    updateAdminProfile,
    changeAdminPassword,  
    deleteAdminProfile
} = require("../Controllers/AdminController");

const { adminMiddleware } = require("../Middlewares/Auth");

const router = express.Router();

router.post("/register", registerAdmin);

router.post("/login", loginAdmin);

router.get("/profile", adminMiddleware, getAdminProfile);

router.put("/profile/update", adminMiddleware, updateAdminProfile);  

router.delete("/profile/delete", adminMiddleware, deleteAdminProfile);

router.put("/profile/change-password", adminMiddleware, changeAdminPassword);  

module.exports = router;
