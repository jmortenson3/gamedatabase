const CONFIG = require('../config');
const mongoose = require('mongoose');

const uri = `mongodb://${CONFIG.user}:${CONFIG.pass}@ds229771.mlab.com:29771/gdb`;
const options = {
  keepAlive: true,
  userNewUrlParser: true
}

mongoose.set('debug', true);
mongoose.connect(uri, options)
  .then( () => {
    console.log('Success!  Connected to mongodb.');
  })
  .catch( () => {
    console.error('Failure!  Database connection error.');
  });

module.exports.Game = require('./game');
module.exports.Genre = require('./genre');

