const express = require('express');
const router = express.Router();
const {
  addGame,
  getGame,
  getGames,
  updateGame,
  deleteGame
} = require('../handlers/games');

//prefix /api/games
router.route('/:id')
  .get(getGame)
  .delete(deleteGame)
  .put(updateGame);

router.route('/')
  .get(getGames)
  .post(addGame);

module.exports = router;