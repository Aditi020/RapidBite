const express = require('express');
const orderController = require('../Controllers/OrderController');
const authMiddleware = require('../Middlewares/Auth');

const router = express.Router();

// Order-related routes
router.post('/', authMiddleware, orderController.placeOrder); // Place a new order
 
router.get('/:userId', authMiddleware, orderController.getOrdersByUser); // Get all orders by user
 
router.put('/:orderId', authMiddleware, orderController.updateOrderStatus); // Update order status


module.exports = router;
