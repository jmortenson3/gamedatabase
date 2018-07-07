const express = require('express');
const app = express();
import mongoose from 'mongoose';
const PORT = 3001;

// get specific game
// GET /game/:id

// get games based on query string
// GET /game/{querystring}

// get a list of game genres
// GET /genres

// add a game to the database
// POST /games
app.get('/', (req, res, next) => {
  res.send(`oh shit whaddup`);
});

app.listen(PORT, () => {
  console.log(`Node server running on port ${PORT}`);
});