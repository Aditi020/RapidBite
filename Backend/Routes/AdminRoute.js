const express = require('express');
const adminController = require('../Controllers/AdminController');
const authMiddleware = require('../Middlewares/Auth'); // Ensures only admins access this

const router = express.Router();

// Admin-specific routes
router.get('/users', authMiddleware, adminController.getAllUsers); // Get all users (admin-only)

router.post('/menu', authMiddleware, adminController.addMenuItem); // Add new menu item

router.put('/menu/:id', authMiddleware, adminController.updateMenuItem); // Update a menu item by ID
 
router.delete('/menu/:id', authMiddleware, adminController.deleteMenuItem); // Delete a menu item by ID


module.exports = router;
