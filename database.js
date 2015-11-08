//Setting up mongoose
var Mongoose = require('mongoose');
var config = require('./config');
Mongoose.connect('mongodb://' + config.database.host + '/' + config.database.db);
var db = Mongoose.connection;

//Error handling on startup
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function cb () {
  console.log('Connection with database succeeded.');
});

//exporting modules
exports.Mongoose = Mongoose;
exports.db = db;