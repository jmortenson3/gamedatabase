const db = require('../models');
//required in db to query mongo

// handlers define functionality at each endpoint

// POST /api/games
exports.addGame = async function(req, res, next) {
  try {
    return res.status(200).send('created a new game, but not really.');
  }
  catch (err) {
    return next(err);
  }
};

// GET /api/games/:id
exports.getGame = async function(req, res, next) {
  try {
    return res.status(200).send('returned a game, but not really.');
  }
  catch (err) {
    return next(err);
  }
};

// GET /api/games/search?
exports.getGames = async function(req, res, next) {
  try {
    return res.status(200).send('returned many games, but not really.');
  }
  catch (err) {
    return next(err);
  }
};

// PUT /api/games/:id
exports.updateGame = async function(req, res, next) {
  try {
    return res.status(200).send('updated a game, but not really.');
  }
  catch (err) {
    return next(err);
  }
};

// DELETE /api/games/:id
exports.deleteGame = async function(req, res, next) {
  try {
    return res.status(200).send('deleted a game, but not really.');
  }
  catch (err) {
    return next(err);
  }
};

