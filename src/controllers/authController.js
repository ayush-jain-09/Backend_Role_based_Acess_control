// Imports
const bcrypt = require("bcryptjs"); 
const jwt = require("jsonwebtoken"); 
const User = require("../models/userModel"); 

// Controller function for user registration
const register = async (req, res) => {
  try {
    // Destructure the user data from the request body
    const { username, password, role } = req.body;

    // Hash the user's password with a salt round of 10
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance with the hashed password
    const newUser = new User({ username, password: hashedPassword, role });

    // Save the new user to the database
    await newUser.save();

    // Send a success response with a confirmation message
    res.status(201).json({ message: `User registered with username ${username}` });
  } catch (err) {
    // Handle unexpected errors
    res.status(500).json({ message: "Something went wrong" });
  }
};




// Controller function for user login
const login = async (req, res) => {
  try {
    // Destructure 
    const { username, password } = req.body;

    // Find a user in the database with the provided username
    const user = await User.findOne({ username });

    // If no user is found, return a 404 error
    if (!user) {
      return res
        .status(404)
        .json({ message: `User with username ${username} not found` });
    }

    // Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    // If the passwords don't match, return a 400 error
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate a JWT token with the user's ID and role
    const token = jwt.sign(
      { id: user._id, role: user.role }, // Payload: user ID and role
      process.env.JWT_SECRET, // Secret key from environment variables
      { expiresIn: "1h" } // Token expiration time
    );

    // Send the token as the response
    res.status(200).json({ token });
  } catch (err) {
    // Handle unexpected errors
    res.status(500).json({ message: "Something went wrong" });
  }
};


module.exports = {
  register, // Export
  login, // Export
};
