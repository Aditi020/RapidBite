const { Order } = require('../models/OrderModel');
const { orderValidationSchema } = require('../models/OrderModel');

// Get orders for the logged-in user
const getUserOrders = async (req, res) => {
    try {
        const userId = req.user.id;
        const orders = await Order.find({ userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user orders', error });
    }
};

// Place a new order (Cart -> Order)
const placeOrder = async (req, res) => {
    try {
        const { foodItems, totalAmount } = req.body;
        const userId = req.user.id;

        // Validate order data using Zod
        const validationResult = orderValidationSchema.safeParse({ userId, foodItems, totalAmount, status: 'pending' });
        if (!validationResult.success) return res.status(400).json({ message: 'Invalid order data', errors: validationResult.error.issues });

        const order = new Order({ userId, foodItems, totalAmount, status: 'pending' });
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Failed to place order', error });
    }
};

module.exports = {
    getUserOrders,
    placeOrder,
};
