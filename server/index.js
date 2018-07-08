const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3001;
const gameRoutes = require('./routes/games');
const genreRoutes = require('./routes/genres');

app.use(cors());
app.use(bodyParser.json());

app.use('/api/games', gameRoutes);
app.use('/api/genres', genreRoutes);

app.listen(PORT, () => {
  console.log(`Node server running on port ${PORT}`);
});