const db = require('../models');

exports.createTag = async function(req, res, next) {
  if (!req.body.tag) {
    return res.status(400).json({
      error: 'Could not create tag: tag name must be specified.'
    });
  }
  try {
    let tag = await db.Tag.create({
      tag: req.body.tag
    });
    console.log(`Created tag ${tag.tag} with id ${tag._id}`);
    return res.status(200).json(tag);
  } catch (err) {
    return res.status(400).json({
      error: err
    });
  }
};

exports.getTag = async function(req, res, next) {
  if (!req.params.id) {
    return res.status(400).json({
      error: 'Could not find tag - id not specified.'
    });
  }
  try {
    let tag = await db.Tag.findById(req.params.id);
    return res.status(200).json(tag);
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
};

exports.getTags = async function(req, res, next) {
  try {
    let tags = await db.Tag.find();
    return res.status(200).json(tags);
  } catch (err) {
    return res.status(400).json({
      error: err
    });
  }
};

exports.deleteTag = async function(req, res, next) {
  try {
    let tag = await db.Tag.findById(req.params.id);
    await tag.remove();
    return res.status(200).json({
      message: `Removed tag ${tag.tag}`
    });
  } catch (err) {
    return res.status(400).json({
      error: err
    });
  }
};