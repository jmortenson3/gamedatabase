const db = require('../models');
//required in db to query mongo

// POST /api/genres
exports.createGenre = async function(req, res, next) {
  try {
    if (!req.body.genre) {
      return res.status(400).send('genre can\'t be blank');
    }
    let genre = await db.Genre.create({
      genre: req.body.genre
    });
    return res.status(200).send(`Created genre ${req.body.genre}`);
  }
  catch (err) {
    return next(err);
  }
};

// GET /api/genre/:id
exports.getGenre = async function(req, res, next) {
  try {
    let genre = await db.Genre.findById(req.params.id);
    return res.status(200).json(genre);
  }
  catch (err) {
    return next(err);
  }
};

// GET /api/genre
exports.getGenres = async function(req, res, next) {
  try {
    let genres = await db.Genre.find();
    return res.status(200).json(genres);
  }
  catch (err) {
    return next(err);
  }
};

// DELETE /api/genre/:id
exports.deleteGenre = async function(req, res, next) {
  try {
    let genre = await db.Genre.findById(req.params.id);
    await genre.remove();
    return res.status(200).json(genre);
  }
  catch (err) {
    return next(err);
  }
};