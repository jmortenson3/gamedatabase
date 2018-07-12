const db = require('../models');
// handlers define functionality at each endpoint

// POST /api/games
exports.createGame = async function(req, res, next) {
  try {
    if (!req.body.title) {
      return res.status(400).send('title can\'t be blank');
    }
    let game = await db.Game.create({
      title: req.body.title,
      publisher: req.body.publisher,
      developer: req.body.developer,
      releaseDate: req.body.releaseDate,
      genre: req.body.genre
    });
    return res.status(200).send(`Created game ${req.body.title}`);
  }
  catch (err) {
    return next(err);
  }
};

// GET /api/games/:id
exports.getGame = async function(req, res, next) {
  try {
    let game = await db.Game.find(req.params.id);
    return res.status(200).json(game);
  }
  catch (err) {
    return next(err);
  }
};

// GET /api/games/search?
exports.getGamesByCriteria = async function(req, res, next) {
  try {
    console.log('am i here?');
    //let games = await db.Game.find({ req})
    return res.status(200).send( req.query );
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
    let game = await db.Game.findById(req.params.id);
    await game.remove();
    return res.status(200).json(game);
  }
  catch (err) {
    return next(err);
  }
};

