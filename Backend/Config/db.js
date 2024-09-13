const mongoose = require("mongoose");
require("dotenv").config();  // Ensure dotenv is called correctly

// MongoDB connection setup
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://aditikumar2224:AK0MongoDB@cluster0.zie5hxe.mongodb.net/RapidBite");
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
