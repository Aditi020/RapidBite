const { Menu } = require('../models/MenuModel');
const { menuValidationSchema } = require('../models/MenuModel');

// Fetch all menu items
const getMenu = async (req, res) => {
    try {
        const menuItems = await Menu.find({});
        res.status(200).json(menuItems);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch menu items', error });
    }
};

// Fetch a single menu item by ID
const getMenuById = async (req, res) => {
    try {
        const menuItem = await Menu.findById(req.params.id);
        if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch menu item', error });
    }
};

// Add a new menu item (Admin only)
const addMenuItem = async (req, res) => {
    try {
        // Validate the incoming data with Zod
        const validationResult = menuValidationSchema.safeParse(req.body);
        if (!validationResult.success) return res.status(400).json({ message: 'Invalid data', errors: validationResult.error.issues });

        const menuItem = new Menu(req.body);
        await menuItem.save();
        res.status(201).json(menuItem);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add menu item', error });
    }
};

// Update an existing menu item (Admin only)
const updateMenuItem = async (req, res) => {
    try {
        const menuItem = await Menu.findById(req.params.id);
        if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });

        const validationResult = menuValidationSchema.safeParse(req.body);
        if (!validationResult.success) return res.status(400).json({ message: 'Invalid data', errors: validationResult.error.issues });

        Object.assign(menuItem, req.body);
        await menuItem.save();
        res.status(200).json(menuItem);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update menu item', error });
    }
};

module.exports = {
    getMenu,
    getMenuById,
    addMenuItem,
    updateMenuItem,
};
