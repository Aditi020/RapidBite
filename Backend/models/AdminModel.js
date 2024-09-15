const mongoose = require('mongoose');
const { z } = require('zod'); // Import Zod types

// Zod validation for Admin data
const AdminValidationSchema = z.object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    // role: z.enum(['customer', 'restaurant_owner', 'delivery_person']),
});

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = {
    Admin,
    AdminValidationSchema,
};