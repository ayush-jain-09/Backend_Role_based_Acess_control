// Import required modules
const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

// Initialize Express application
const app = express();

// Connect to the database
dbConnect();

// Middleware to parse JSON requests
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes); // Register and Login route
app.use("/api/users", userRoutes); // Admin, manager and user acess controll

// Start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
