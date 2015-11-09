var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var AnnualSchema = new Schema({
 JAPAN : String
});

//models for each collection
var annualflights = Mongoose.model('annualflight', AnnualSchema);

var dailyflights = Mongoose.model('dailyflight', AnnualSchema);

var expenditures = Mongoose.model('expenditure', AnnualSchema);

module.exports = {
  AnnualFlights : annualflights,
  DailyFlights : dailyflights,
  Expenditures : expenditures
};