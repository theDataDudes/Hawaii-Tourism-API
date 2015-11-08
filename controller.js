var Joi = require('joi');
var Boom = require('boom');

//config for the route that retrieves all db data
exports.getAll = {
  handler : function (req, rep) {
    annualflights.find({}, function (err, flight) {
      if (!err) {
        rep(flight);
      } else {
        rep(Boom.badImplementation(err)); //500 error
      }
    });
  }
};

//future config function that allows user to add to db
// exports.add = {
//   validate : {
//     payload : {
//       country : Joi.string().required(),
//       arrivals : Joi.integer().required(),
//       island : Joi.string().required,
//       data : Joi.date().required
//     }
//   },
//   handler : function (req, rep) {
//     // create instance of model
//     // model.save
//   }
// }