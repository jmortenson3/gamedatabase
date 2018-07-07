import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Game = new Schema({
  title: String,
  publisher: String,
  developer: String,
  releaseDate: Date,
  genre: Array,
  lastChanged: { type: Date, default: Date.now() }
});
