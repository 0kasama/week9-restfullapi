const express = require("express");
const auth = express.Router();
const AuthController = require("../routes/auth-route.js");

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
 *     responses:
 *       200:
 *         description: Login.
 *         content:
 *           application/json:
 *             schema:
 *              type: string
 *              example: {token : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9}
 * 
 */

auth.post("/register", AuthController.register);
auth.post("/login", AuthController.login);

module.exports = auth;
