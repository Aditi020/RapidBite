
const { Menu } = require('../models/MenuModel');  // Assuming this is your Menu model
const {Order} = require('../models/OrderModel');    // Order model

// Place a new order (User)
const placeOrder = async (req, res) => {
    const { items } = req.body;  // Array of { itemId, quantity }
    const userId = req.userId;  // Change this to req.userId

    try {
        // Fetch menu details for each item
        let totalAmount = 0;
        const orderItems = await Promise.all(items.map(async (item) => {
            const menuItem = await Menu.findById(item.itemId);

            if (!menuItem) {
                throw new Error(`Menu item with ID ${item.itemId} not found`);
            }

            totalAmount += menuItem.price * item.quantity;

            return {
                itemId: menuItem._id,
                name: menuItem.name,
                quantity: item.quantity,
                price: menuItem.price
            };
        }));

        // Create new order
        const newOrder = new Order({
            userId,  // This will now refer to req.userId
            items: orderItems,
            totalAmount,
            status: 'Pending',
            createdAt: new Date()
        });

        await newOrder.save();
        res.status(201).json({ msg: 'Order placed successfully', order: newOrder });
    } catch (error) {
        res.status(500).json({ msg: 'Failed to place order', error: error.message });
    }
};

// Get all orders for the logged-in user
const getUserOrders = async (req, res) => {
    const userId = req.userId;  // Use req.userId instead of req.user._id

    try {
        const orders = await Order.find({ userId });
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ msg: 'Failed to fetch orders', error });
    }
};

// Get a specific order by ID (User)
const getOrderById = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findById(id);
        if (!order) return res.status(404).json({ msg: 'Order not found' });

        // Ensure the order belongs to the logged-in user
        if (order.userId.toString() !== req.userId.toString()) {
            return res.status(403).json({ msg: 'Unauthorized access to this order' });
        }

        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ msg: 'Failed to fetch order', error });
    }
};

// Update order status (Admin)
const updateOrderStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const order = await Order.findById(id);
        if (!order) return res.status(404).json({ msg: 'Order not found' });

        order.status = status;
        await order.save();

        res.status(200).json({ msg: 'Order status updated successfully', order });
    } catch (error) {
        res.status(500).json({ msg: 'Failed to update order status', error });
    }
};

// Delete an order (Admin)
const deleteOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const order = await Order.findById(id);
        if (!order) return res.status(404).json({ msg: 'Order not found' });

        await order.deleteOne();
        res.status(200).json({ msg: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ msg: 'Failed to delete order', error });
    }
};


module.exports = {
    placeOrder,
    getUserOrders,
    getOrderById,
    updateOrderStatus,
    deleteOrder
};
