const express = require("express");
const auth = express.Router();

const { register, login } = require("../controller/auth-ctrl.js");

auth.post("/register", register);
auth.post("/login", login);

module.exports = auth;

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Succesfully registered!
 * /login:
 *   post:
 *     summary: Login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: string
 *             example: {email: admin@gmail.com, password: admin123}
 *     responses:
 *       200:
 *         description: Login.
 *         content:
 *           application/json:
 *             schema:
 *              type: string
 *              example: {token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9}
 */
