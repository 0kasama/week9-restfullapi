const pool = require("../database.js");

const getMovies = (req, res) => {
  const query = `SELECT * FROM movies`;
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  pool.query(query, [limit, (page - 1) * limit], (err, result) => {
    if (err) throw Error(err.message);
    res.status(200).json(result.rows);
  });
};

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);
  const query = `SELECT * FROM movies WHERE id = $1`;
  pool.query(query, [id], (err, result) => {
    if (err) throw Error(err.message);
    if (result.rows.length > 0) {
      res.status(200).json(result.rows);
    } else {
      res.status(404).json({ message: "Not Found!" });
    }
  });
};

const postMovies = (req, res) => {
  const { id, title, genres, year } = req.body;
  const query = `INSERT INTO movies (id, title, genres, year) VALUES ($1, $2, $3, $4)`;
  pool.query(query, [id, title, genres, year], (err, result) => {
    if (err) throw Error(err.message);
    res.status(200).json({ message: "New Movie Added!" });
  });
};

const putMovies = (req, res) => {
  const { title, genres, year } = req.body;
  const id = parseInt(req.params.id);
  const getMoviebyId = `SELECT id FROM movies WHERE id = $1`;
  pool.query(getMoviebyId, [id], (err, getResult) => {
    if (err) throw Error(err.message);
    if (getResult.rows.length > 0) {
      const query = `UPDATE movies SET title = $1, genres = $2, year =$3 WHERE id = $4`;
      pool.query(query, [title, genres, year, id], (err, result) => {
        if (err) throw Error(err.message);
        res.status(200).json({ message: "Movie Updated!" });
      });
    } else {
      res.status(404).json({ message: "Not Found!" });
    }
  });
};

const deleteMovies = (req, res) => {
  const id = parseInt(req.params.id);
  const getMoviebyId = `SELECT id FROM movies WHERE id = $1`;
  pool.query(getMoviebyId, [id], (err, getResult) => {
    if (err) throw Error(err.message);
    if (getResult.rows.length > 0) {
      const query = `DELETE FROM movies WHERE id = $1`;
      pool.query(query, [id], (err, result) => {
        if (err) throw Error(err.message);
        res.status(200).json({ message: "Movie Deleted!" });
      });
    } else {
      res.status(404).json({ message: "Not Found!" });
    }
  });
};

module.exports = {
  getMovies,
  getMovieById,
  postMovies,
  putMovies,
  deleteMovies,
};
