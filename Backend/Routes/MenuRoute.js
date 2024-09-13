const express = require('express');
const menuController = require('../Controllers/MenuController');

const router = express.Router();

// Menu-related routes
router.get('/', menuController.getAllMenuItems); // Get all menu items

router.get('/categories', menuController.getAllCategories); // Get all categories

module.exports = router;
