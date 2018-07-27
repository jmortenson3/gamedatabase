const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = 3001;
const gameRoutes = require('./routes/games');
const genreRoutes = require('./routes/genres');
const tagRoutes = require('./routes/tags');

app.use(cors());
app.use(bodyParser.urlencoded());

app.use('/api/games', gameRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/tags', tagRoutes);

app.listen(PORT, () => {
  console.log(`Node server running on port ${PORT}`);
});