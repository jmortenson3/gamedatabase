const express = require('express');
const router = express.Router();
const {
  addGenre,
  getGenre,
  getGenres,
  updateGenre,
  deleteGenre
} = require('../handlers/genres');

// prefix /api/genres
router.route('/')
  .get(getGenres)
  .post(addGenre);

router.route('/:id')
  .get(getGenre)
  .delete(deleteGenre)
  .put(updateGenre);

module.exports = router;