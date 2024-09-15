const express = require('express');
const Order = require('../models/Order');
const { UserMiddleware } = require('../Middlewares/Auth');
const router = express.Router();

// Route for user to view their orders
router.get('/user/orders', UserMiddleware, getUserOrders); // Get user orders


module.exports = router;
