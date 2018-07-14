const express = require('express');
const router = express.Router();
const {
  createGame,
  getGame,
  getGamesByCriteria,
  updateGame,
  deleteGame
} = require('../handlers/games');

//prefix /api/games
router.route('/')
.get(getGamesByCriteria)
.post(createGame);

router.route('/:id')
  .get(getGame)
  .delete(deleteGame)
  .put(updateGame);

module.exports = router;