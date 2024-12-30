const mongoose = require('mongoose');
const { z } = require('zod'); // Import Zod types

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 255,
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
    dob: {
         type: Date,
          default: null 
        },
    gender: {
         type: String, 
         enum: ['male', 'female', 'other'], 
         default: null 
        },
    contact: { 
        type: String, 
        default: null
     },
    photo: {
         type: String, 
         default: null 
        },
    addresses: [{
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'Address' }],
}, { timestamps: true });


// Pre-save middleware for validation.  This uses Mongoose's built-in validation, not Zod directly
userSchema.pre('save', async function (next) {
    try {
        if (this.isNew) {
            await UserRegistrationSchema.parseAsync(this.toObject());
        } else {
            await UserUpdateSchema.parseAsync(this.toObject());
        }
        next();
    } catch (error) {
        return next(new Error(`Zod validation error: ${error.errors.map(err => err.message).join(', ')}`));
    }
});



const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    userValidationSchema,
};