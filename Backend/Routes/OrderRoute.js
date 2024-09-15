const express = require('express');
const { placeOrder, getUserOrders, getOrderById, updateOrderStatus, deleteOrder } = require('../Controllers/OrderController');
const {userMiddleware} = require('../Middlewares/Auth');  // Middleware to authenticate user
const {adminMiddleware} = require('../Middlewares/Auth');  // Middleware to authenticate admin

const router = express.Router();

// User Order routes
router.post('/place', userMiddleware, placeOrder);  // Place a new order
router.get('/getOrder', userMiddleware, getUserOrders);  // Get all orders for the logged-in user
router.get('/:id', userMiddleware, getOrderById);  // Get a specific order by its ID

// Admin Order routes
router.put('/:id', adminMiddleware, updateOrderStatus);  // Admin can update order status
router.delete('/:id', adminMiddleware, deleteOrder);  // Admin can delete an order

module.exports = router;
