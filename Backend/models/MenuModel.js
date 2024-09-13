const mongoose = require('mongoose');
const { z } = require('zod'); // Import Zod types

// Zod validation for Menu data
const menuValidationSchema = z.object({
    name: z.string().min(1),
    category: z.string(),
    price: z.number().min(0),
    availability: z.boolean(),
});

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    availability: {
        type: Boolean,
        default: true,
    },
}, { timestamps: true });

const Menu = mongoose.model('Menu', menuSchema);

module.exports = {
    Menu,
    menuValidationSchema,
};
