// In AddressModel.js
const mongoose = require("mongoose");

// Define the Mongoose schema for Address
const addressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    postalCode: {
        type: String,
        required: true,
    },
    addressLine1: {
        type: String,
        required: true,
    },
    addressLine2: {
        type: String,
        required: false,
    },
    isEligible: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

// Create and export the Address model
const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
