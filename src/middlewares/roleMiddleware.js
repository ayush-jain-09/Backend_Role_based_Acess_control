// Middleware to authorize roles for protected routes
// Accepts one or more allowed roles as arguments
const authorizeRoles = (...allowedRoles) => {
  // Returns a middleware function
  return (req, res, next) => {
    // Check if the role of the user (attached to req.user) is in the list of allowed roles
    if (!allowedRoles.includes(req.user.role)) {
      // If the user's role is not authorized, respond with a 403 Forbidden status
      return res
        .status(403) //Forbidden
        .json({ message: "Access denied" });
    }

    // If the role is authorized, pass control to the next middleware or route handler
    next();
  };
};


module.exports = authorizeRoles;//export
