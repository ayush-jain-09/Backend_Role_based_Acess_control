// Import the JSON Web Token (JWT) library
const jwt = require("jsonwebtoken");

// Middleware to verify JWT tokens
const verifyToken = (req, res, next) => {
  let token; // Variable to store the token
  let authHeader = req.headers.Authorization || req.headers.authorization; // Retrieve the Authorization header from the request

  // Check if the Authorization header exists and starts with "Bearer"
  if (authHeader && authHeader.startsWith("Bearer")) {
    // Extract the token from the "Bearer <token>" format
    token = authHeader.split(" ")[1];

    // If no token is found after "Bearer", return an error response
    if (!token) {
      return res
        .status(401) //Unauthorized
        .json({ message: "No token, authorization denied" });
    }

    try {
      // Verify the token using the secret key from the environment variables
      const decode = jwt.verify(token, process.env.JWT_SECRET);

      // Attach the decoded payload (user information) to the request object
      req.user = decode;

      console.log("The decoded user is:", req.user); // Debugging: Log the decoded user

      // Call the next middleware or route handler in the pipeline
      next();
    } catch (err) {
      // Handle errors during token verification (e.g., expired or tampered token)
      res.status(400) //Bad Request
        .json({ message: "Token is not valid" }); 
    }
  } else {
    // If the Authorization header is missing or not in the correct format, return an error response
    return res
      .status(401) //Unauthorized
      .json({ message: "No token, authorization denied" }); 
  }
};


module.exports = verifyToken;// Export 
