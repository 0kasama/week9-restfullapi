const express = require("express");
const movies = express.Router();
const { verify } = require("../middlewares/auth-mid.js");
const {
  getMovies,
  getMovieById,
  postMovies,
  putMovies,
  deleteMovies,
} = require("../routes/movies-route.js");

/**
 * @swagger
 * components:
 *   schemas:
 *     Movie:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         genres:
 *           type: string
 *         year:
 *           type: string
 *       example:
 *         id: 1
 *         title: Reckless
 *         genres: Comedy|Drama|Romance
 *         year: 2001
 */

/**
 * @swagger
 * tags:
 *   name: Movies
 * /movies:
 *   get:
 *     summary: Get All Movies
 *     security:
 *       - bearerAuth: []
 *     tags: [Movies]
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 *   post:
 *     summary: Add New Movie
 *     security:
 *       - bearerAuth: []
 *     tags: [Movies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Movie'
 *     responses:
 *       200:
 *         description: New Movie Added!.
 *
 * /movies/{id}:
 *   get:
 *    summary: Get Movie by id
 *    security:
 *       - bearerAuth: []
 *    tags: [Movies]
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
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Movie'
 *      404:
 *        description: Not Found!
 *   put:
 *    summary: Update Movie by id
 *    security:
 *       - bearerAuth: []
 *    tags: [Movies]
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
 *            example: {title: Reckles, genres: Comedy|Drama|Romance, year: 2001}
 *    responses:
 *      200:
 *        description: Movie Updated!
 *      404:
 *        description: Not Found!
 *   delete:
 *     summary: Remove the movie by id
 *     security:
 *       - bearerAuth: []
 *     tags: [Movies]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *     responses:
 *       200:
 *         description: Movie Deleted!
 *       404:
 *         description: Not Found!
 */

movies.route("/movies").get(verify, getMovies).post(verify, postMovies);

movies
  .route("/movies/:id")
  .get(verify, getMovieById)
  .put(verify, putMovies)
  .delete(verify, deleteMovies);

module.exports = movies;
