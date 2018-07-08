const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  title: String,
  publisher: String,
  developer: String,
  releaseDate: Date,
  genre: Array,
  rating: Number,
  lastChanged: { type: Date, default: Date.now() }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;