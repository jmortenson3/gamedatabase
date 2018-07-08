const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  genre: String,
  lastChanged: { type: Date, default: Date.now() }
});

const Genre = mongoose.model('Genre', genreSchema);

module.exports = Genre;