const connection = require("../db/conn.js");

const index = (req, res) => {
  const movieSql = `SELECT * FROM movies_db.movies`;
  connection.query(movieSql, (err, results) => {
    if (err) return res.status(500).json({ messagge: "internal server error" });
    res.json({
      movies: results,
    });
  });
};

const show = (req, res) => {
  const { id } = req.params;
  const movieSql = `SELECT * FROM movies_db.movies WHERE id = ?`;

  connection.query(movieSql, [id], (err, results) => {
    if (err) return res.status(500).json({ messagge: err });
    if (results.length === 0)
      return res.status(404).json({ messagge: "Movie not found" });

    const movie = results[0];
    const reviewSql = "SELECT * FROM reviews WHERE movie_id = ?";

    connection.query(reviewSql, [id], (err, results) => {
      if (err) return res.status(500).json({ messagge: err });
      movie.reviews = results;

      res.json({
        movie,
      });
    });
  });
};

module.exports = { index, show };
