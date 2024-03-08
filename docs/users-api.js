const express = require("express");
const users = express.Router();
const { verify, authorized } = require("../middlewares/auth-mid.js");

const {
  getUsers,
  getUserById,
  putUsers,
  deleteUsers,
} = require("../routes/users-route.js");

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         email:
 *           type: string
 *         gender:
 *           type: string
 *         password:
 *           type: string
 *         role :
 *           type: string
 */

/**
 * @swagger
 * tags:
 *   name: Users
 * /users:
 *   get:
 *     summary: Lists all the users
 *     security:
 *       - bearerAuth: []
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *
 * /users/{id}:
 *   get:
 *    summary: Get User by id
 *    security:
 *       - bearerAuth: []
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *    responses:
 *      200:
 *        content:
 *           application/json:
 *             schema:
 *               type: string
 *      404:
 *        description: Not Found!
 *   put:
 *    summary: Update User by id
 *    security:
 *       - bearerAuth: []
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: string
 *    responses:
 *      200:
 *        description: User Updated!
 *      404:
 *        description: Not Found!
 *   delete:
 *     summary: Remove the user by id
 *     security:
 *       - bearerAuth: []
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: User Deleted!
 *       404:
 *         description: Not Found!
 */

users.get("/users", verify, getUsers);

users
  .route("/users/:id")
  .get(verify, getUserById)
  .put(verify, authorized, putUsers)
  .delete(verify, authorized, deleteUsers);

module.exports = users;
