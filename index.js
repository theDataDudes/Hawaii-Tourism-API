var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({ port : 3000 });


//route for retreiving all of the data from the DB
server.route({
  method : 'GET',
  path : '/',
  handler : function (req, rep) {
    rep(); //query the DB and return all entries
  }
});

//route for retrieving a single obejct from the DB
server.route({
  method : 'GET',
  path : '/{id?}',
  handler : function (req, rep) {
    if (req.params.id) {
      return rep();   //add in database query
    }
    rep(); //reply with filtered object
  }
});

//start the server
server.start(function () {
  console.log('Server running at:', server.info.uri);
});