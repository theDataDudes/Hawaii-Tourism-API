var Controller = require('./controller')
var Static = require('./static');

exports.endpoints = [
  { method : 'GET', path : '/', config : Controller.getAll }
];

//route for retreiving all of the data from the DB
// server.route({
//   method : 'GET',
//   path : '/',
//   handler : function (req, rep) {
//     rep(); //query the DB and return all entries
//   }
// });

//route for retrieving a single obejct from the DB
// server.route({
//   method : 'GET',
//   path : '/{id?}',
//   handler : function (req, rep) {
//     if (req.params.id) {
//       return rep();   //add in database query
//     }
//     rep(); //reply with filtered object
//   }
// });