const express = require('express');
const { getMenu, getMenuById } = require('../Controllers/MenuController');
const router = express.Router();

router.get('/', getMenu); // Fetch all menu items
router.get('/:id', getMenuById); // Fetch single menu item by ID

module.exports = router;
