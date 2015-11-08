var Hapi = require('hapi');
var config = require('./config');
var db = require('./database');
var Routes = require('./routes');
var server = new Hapi.Server();

//set server connection and route endpoints
server.connection({ port : config.server.port });
server.route(Routes.endpoints);

//start the server
server.start(function () {
  console.log('Server running at:', server.info.uri);
});