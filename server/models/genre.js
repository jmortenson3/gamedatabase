const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  genre: String,
  lastChanged: { type: Date, default: Date.now() }
});

genreSchema.plugin(mongooseStringQuery);

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;