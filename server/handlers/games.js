const db = require('../models');
// handlers define functionality at each endpoint

// POST /api/games
exports.createGame = async function(req, res, next) {
  console.log(req.body);
  try {
    if (!req.body.title) {
      // console.log(JSON.stringify(req.body));
      return res.status(400).send('title can\'t be blank');
    }
    let game = await db.Game.create({
      title: req.body.title,
      publisher: req.body.publisher,
      developer: req.body.developer,
      releaseDate: req.body.releaseDate,
      genre: req.body.genre
    });
    console.log(`Created game with id ${game.id}`);
    return res.status(200).json(game);
  }
  catch (err) {
    console.error(`ERROR: ${err.message}`);
    return res.status(400).json({
      error: `Could not create game.`
    })
  }
};

// GET /api/games/:id
exports.getGame = async function(req, res, next) {
  try {
    if (req.params.id) {
      let game = await db.Game.findById(req.params.id);
      return res.status(200).json(game);
    }
    else {
      return res.status(400).json({
        error: `Could not get game, no game specified.`
      });
    }
  }
  catch (err) {
    console.error(`ERROR: ${err.message}`);
    return res.status(404).json({
      error: `Could not find game with id ${req.params.id}`
    });
  }
};

// GET /api/games/search?key=val
exports.getGamesByCriteria = async function(req, res, next) {
  try {
    let games = await db.Game.apiQuery(req.query);
    return res.status(200).send( games );
  }
  catch (err) {
    console.error(`ERROR: ${err.message}`);
    return res.status(400).json({
      error: `Could not find games.`
    });
  }
};

// PUT /api/games/:id
exports.updateGame = async function(req, res, next) {
  try {
    if (req.params.id) {
      let game = await db.Game.findByIdAndUpdate(req.params.id, req.body);
      return res.status(200).send(game);
    }
    else {
      return res.status(400).json({
        error: `Could not update game.  No game specified.`
      });
    }
  }
  catch (err) {
    console.error(`ERROR: ${err.message}`);
    return res.status(400).json({
      error: `Could not update game.`
    });
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
    console.error(`ERROR: ${err.message}`);
    return res.status(400).json({
      error: `could not delete game.`
    });
  }
};

