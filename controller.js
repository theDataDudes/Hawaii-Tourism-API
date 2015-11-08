var Joi = require('joi');
var Boom = require('boom');
var AnnualFlights = require('./model').AnnualFlights;
var DailyFlights = require('./model').DailyFlights;
var Expenditures = require('./model').Expenditures;

//config for the route that retrieves annualflights collection
exports.getAnnual = {
  handler : function (req, rep) {
    AnnualFlights.find({}, function (err, annual) {
      if (!err) {
        rep(annual);
      } else {
        rep(Boom.badImplementation(err)); //500 error
      }
    });
  }
};

//config for the route that retrieves dailyflights collection
exports.getDaily = {
  handler : function (req, rep) {
    DailyFlights.find({}, function (err, daily) {
      if (!err) {
        rep(daily);
      } else {
        rep(Boom.badImplementation(err)); //500 error
      }
    });
  }
};

//config for the route that retrieves expenditures collection
exports.getExpenditures = {
  handler : function (req, rep) {
    Expenditures.find({}, function (err, expenditures) {
      if (!err) {
        rep(expenditures);
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