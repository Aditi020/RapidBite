const express = require("express");
const {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    changeUserPassword,   // Ensure this is imported
    getUserOrders,        // Ensure this is imported
    deleteUserProfile
} = require("../Controllers/UserController");
  
const { userMiddleware } = require("../Middlewares/Auth");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", userMiddleware, getUserProfile);
 
router.put("/profile/update", userMiddleware, updateUserProfile);  // Update user profile

router.delete("/profile/delete", userMiddleware, deleteUserProfile);  // Delete user profile

router.put("/profile/change-password", userMiddleware, changeUserPassword);  // Change user password

router.get("/profile/orders", userMiddleware, getUserOrders);  // Get user orders


module.exports = router;
