const { Menu } = require('../models/MenuModel');
const { menuValidationSchema } = require('../models/MenuModel');

// Fetch all menu items
const getMenu = async (req, res) => {
    try {
        const menuItems = await Menu.find({});
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch menu items', error: error.message });
    }
};

// Fetch a single menu item by ID
const getMenuById = async (req, res) => {
    try {
        const menuItem = await Menu.findById(req.params.id);

        if (!menuItem) {
            return res.status(404).json({ message: 'Menu item not found' });
        }

        res.status(200).json(menuItem);
    } catch (error) {
        // Improved error handling for invalid ObjectID
        if (error.kind === 'ObjectId') {
            return res.status(400).json({ message: 'Invalid menu item ID' });
        }

        res.status(500).json({ message: 'Failed to fetch menu item', error: error.message });
    }
};

module.exports = {
    getMenu,
    getMenuById,
};
