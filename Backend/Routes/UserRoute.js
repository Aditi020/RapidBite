const express = require("express");
const {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    changeUserPassword,
    getUserOrders,
    deleteUserProfile,
    createUserAddress,
    updateUserAddress,
} = require("../Controllers/UserController");

const { userMiddleware } = require("../Middlewares/Auth");

const router = express.Router();

// User routes
router.post("/register", registerUser);

router.post("/login", loginUser);

// Protected routes (middleware)
router.get("/profile", userMiddleware, getUserProfile);

router.put("/profile/update", userMiddleware, updateUserProfile);

router.delete("/profile/delete", userMiddleware, deleteUserProfile);

router.put("/profile/change-password", userMiddleware, changeUserPassword);

router.get("/profile/orders", userMiddleware, getUserOrders);

// Address routes
router.post("/profile/address", userMiddleware, createUserAddress); // Create address

router.put("/profile/address/:userId", userMiddleware, updateUserAddress); // Update address

module.exports = router;
 