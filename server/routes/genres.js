const express = require('express');
const router = express.Router();
const {
  createGenre,
  getGenre,
  getGenres,
  deleteGenre
} = require('../handlers/genres');

// prefix /api/genres
router.route('/')
  .get(getGenres)
  .post(createGenre);

router.route('/:id')
  .get(getGenre)
  .delete(deleteGenre);

module.exports = router;