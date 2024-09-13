const mongoose = require('mongoose');
const { z } = require('zod');

// Zod validation for Order data
const orderValidationSchema = z.object({
    userId: z.string().nonempty(),
    foodItems: z.array(z.object({
        menuId: z.string().nonempty(),
        quantity: z.number().min(1),
    })),
    totalAmount: z.number().min(0),
    status: z.enum(['pending', 'completed', 'cancelled']),
});

// Corrected Schema definition (fixed typo: orderSchea -> orderSchema)
const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    foodItems: [{
        menuId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Menu',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
    }],
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'cancelled'],
        default: 'pending',
    },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = {
    Order,
    orderValidationSchema,
};
