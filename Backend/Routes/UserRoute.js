const express = require("express");
const {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    changeUserPassword,
    getUserOrders,     
    deleteUserProfile
} = require("../Controllers/UserController");
  
const { userMiddleware } = require("../Middlewares/Auth");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile", userMiddleware, getUserProfile);
 
router.put("/profile/update", userMiddleware, updateUserProfile);  

router.delete("/profile/delete", userMiddleware, deleteUserProfile);

router.put("/profile/change-password", userMiddleware, changeUserPassword); 

router.get("/profile/orders", userMiddleware, getUserOrders); 


module.exports = router;
