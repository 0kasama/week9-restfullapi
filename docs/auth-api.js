const express = require("express");
const auth = express.Router();

const { register, login } = require("../routes/auth-route.js");

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register New User
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Successfully Registered!
 * 
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
 *             example: {email: admin@mail.com, password: admin123}
 *     responses:
 *       200:
 *         description: Login
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: {token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9}
 *       401:
 *         description: Wrong Email or Password!
 */

auth.post("/register", register);
auth.post("/login", login);

module.exports = auth;
