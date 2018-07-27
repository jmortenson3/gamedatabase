const express = require('express');
const router = express.Router();
const {
  createTag,
  getTag,
  getTags,
  deleteTag
} = require('../handlers/tags');

// prefix /api/tags
router.route('/')
  .get(getTags)
  .post(createTag);

router.route('/:id')
  .get(getTag)
  .delete(deleteTag);

module.exports = router;