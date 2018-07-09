const CONFIG = require('../config');
const mongoose = require('mongoose');

// db connect code
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect(`mongodb://${CONFIG.user}:${CONFIG.pass}@ds229771.mlab.com:29771/gdb`, {
  keepAlive: true,
  useNewUrlParser: true
});

module.exports.Game = require('./game');
module.exports.Genre = require('./genre');

