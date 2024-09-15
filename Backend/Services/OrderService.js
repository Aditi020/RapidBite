const { Order } = require('../models/OrderModel');

// Fetch orders by user ID
const getOrdersByUser = async (userId) => {
    return await Order.find({ userId });
};

// Place a new order for a user
const placeOrderService = async (userId, foodItems, totalAmount) => {
    const order = new Order({ userId, foodItems, totalAmount, status: 'pending' });
    return await order.save();
};

module.exports = {
    getOrdersByUser,
    placeOrderService,
};
