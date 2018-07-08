const db = require('../models');
//required in db to query mongo

// POST /api/genres
exports.createGenre = async function(req, res, next) {
  try {
    return res.status(200).send('updated a genre, but not really');
  }
  catch (err) {
    return next(err);
  }
};

// GET /api/genres
exports.getGenres = async function(req, res, next) {
  try {
    return res.status(200).send('returned many genres, but not really');
  }
  catch (err) {
    return next(err);
  }
};

// GET /api/genre/:id
exports.getGenre = async function(req, res, next) {
  try {
    return res.status(200).send('returned a genre, but not really');
  }
  catch (err) {
    return next(err);
  }
};

// PUT /api/genre/:id
exports.updateGenre = async function(req, res, next) {
  try {
    return res.status(200).send('updated a genre, but not really');
  }
  catch (err) {
    return next(err);
  }
};

// DELETE /api/genre/:id
exports.deleteGenre = async function(req, res, next) {
  try {
    return res.status(200).send('deleted a genre, but not really');
  }
  catch (err) {
    return next(err);
  }
};