const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
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

gameSchema.plugin(mongooseStringQuery);

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;