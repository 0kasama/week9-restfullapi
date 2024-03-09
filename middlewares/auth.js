const jwt = require("../lib/jwt.js");

const authorization = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1];

    jwt.verify(token, "secretkey", (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Unauthorized!" });
      } else {
        req.userLogged = { email: decoded.email, role: decoded.role };
        next();
      }
    });
  } catch (err) {
    res.status(401).json({ message: "Require Token!" });
  }
};

const authentication = (req, res, next) => {
  const { role } = req.userLogged;
  if (role === "admin") {
    next();
  } else {
    res.status(403).json({
      message: "User Does Not Have Permission!",
    });
  }
};

module.exports = {
  authentication,
  authorization,
};
