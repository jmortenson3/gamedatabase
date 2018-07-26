const db = require('../models');
//required in db to query mongo

// POST /api/genres
exports.createGenre = async function(req, res, next) {
  try {
    console.log(req.body);
    if (!req.body.genre) {
      return res.status(400).send('genre can\'t be blank');
    }
    let genre = await db.Genre.create({
      genre: req.body.genre
    });
    return res.status(200).send(`Created genre ${req.body.genre}`);
  } catch (err) {
    console.error(`ERROR: ${err.message}`);
    return res.status(400).json({
      error: `Could not create genre.`
    })
  }
};

// GET /api/genre/:id
exports.getGenre = async function(req, res, next) {
  try {
    if (req.params.id) {
      let genre = await db.Genre.findById(req.params.id);
      return res.status(200).json(genre);
    } else {
      return res.status(400).json({
        error: `Could not get genre. No genre specified.`
      });
    }
  } catch (err) {
    console.error(`ERROR: ${err.message}`);
    return res.status(400).json({
      error: `Could not get genre.`
    })
  }
};

// GET /api/genre
exports.getGenres = async function(req, res, next) {
  try {
    let genres = await db.Genre.find();
    return res.status(200).json(genres);
  } catch (err) {
    console.error(`ERROR: ${err.message}`);
    return res.status(400).json({
      error: `Could not get genres.`
    })
  }
};

// DELETE /api/genre/:id
exports.deleteGenre = async function(req, res, next) {
  try {
    if (req.params.id) {
      let genre = await db.Genre.findById(req.params.id);
      await genre.remove();
      return res.status(200).json(genre);
    } else {
      return res.status(400).json({
        error: `Could not delete genre, no genre specified.`
      });
    }
  } catch (err) {
    console.error(`ERROR: ${err.message}`);
    return res.status(400).json({
      error: `Could not delete genre.`
    })
  }
};