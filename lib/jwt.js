const jwt = require("jsonwebtoken");
const passKey = "koderahasia";

// Generate JWT Token
const generateToken = (payload) => {
  return jwt.sign(payload, passKey);
};

// Verify token
const verifyToken = (token) => {
  return jwt.verify(token, passKey);
};

module.exports = {
  generateToken,
  verifyToken,
};
