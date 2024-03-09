const pool = require("../database.js");
const { generateToken } = require("../lib/jwt.js");
const { hashPassword, comparePassword } = require("../lib/bcrypt.js");

const register = (req, res) => {
  const { id, email, gender, password, role } = req.body;

  const query = `INSERT INTO users (id, email, gender, password, role) VALUES ($1, $2, $3, $4, $5)`;

  hashPassword(password, (hashedPassword) => {
    pool.query(
      query,
      [id, email, gender, hashedPassword, role],
      (err, result) => {
        if (err) throw new Error(err.message);
        res.status(200).json({ message: "Successfully registered!" });
      }
    );
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  const getUserByEmail = `SELECT email, password, role FROM users WHERE email = $1`;

  pool.query(getUserByEmail, [email], (err, result) => {
    if (err) throw new Error(err.message);

    if (result.rows.length > 0) {
      const storedHashedPassword = result.rows[0].password;

      comparePassword(
        password,
        storedHashedPassword,
        (passwordsMatch) => {
          if (passwordsMatch) {
            const token = generateToken({ email, role: result.rows[0].role });
            res.json({ token });
          } else {
            res.status(401).json({ message: "Wrong Email or Password!" });
          }
        }
      );
    }
  });
};

module.exports = { register, login };
