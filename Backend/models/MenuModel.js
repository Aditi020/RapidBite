const mongoose = require('mongoose');
const { z } = require('zod'); // Import Zod types

// Zod validation for Menu data
const menuValidationSchema = z.object({
    name: z.string().min(1),
    description: z.string().optional(),
    category: z.string(),
    price: z.number().min(0),
    imageUrl: z.string().url(),
    availability: z.boolean(),
    additionalImages: z.array(z.string().url()).optional(),
});

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    additionalImages: [{
        type: String,
    }],
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
