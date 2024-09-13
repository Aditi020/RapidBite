require('dotenv').config();  // This initializes dotenv, no need to call it again
const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./Config/db");

const cors = require("cors");
const userRoutes = require("./Routes/UserRoute");
require("./Config/db");  // Make sure your db connection logic is correct
connectDB(); 


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the RapidBite API");
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

