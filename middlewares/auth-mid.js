const jwt = require("jsonwebtoken");

const verify = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split("")[1];

    jwt.verify(token, "secretKey", (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Unauthorized!" });
      } else {
        req.userLogged = { email: decoded.email, role: decoded.role };
        next();
      }
    });
  } catch (err) {
    res.status(401).json({ message: "No Token!" });
  }
};

const authorized = (req, res, next) => {
  const { role } = req.userLogged;
  if (role === "Admin") {
    next();
  } else {
    res.status(403).json({
      message: "Do not have permission!",
    });
  }
};

module.exports = {
  verify,
  authorized,
};
