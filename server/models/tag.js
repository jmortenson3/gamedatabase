const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const Schema = mongoose.Schema;

const tagSchema = new Schema({
  tag: String,
  lastChanged: { type: Date, default: Date.now() }
});

tagSchema.plugin(mongooseStringQuery);

const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;

