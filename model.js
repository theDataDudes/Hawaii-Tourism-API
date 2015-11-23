var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var AnnualSchema = new Schema({
 JAPAN : String
});

//models for each collection
//model needs to be lowercase when called
//mongose will make assumption that call is on collection that is plural
var annualflights = Mongoose.model('annualflight', AnnualSchema);

var dailyflights = Mongoose.model('dailyflight', AnnualSchema);

var expenditures = Mongoose.model('expenditure', AnnualSchema);

var avgstay = Mongoose.model('avgstay', AnnualSchema);

var hawaiivisitors = Mongoose.model('hawaiivisitor', AnnualSchema);

module.exports = {
  AnnualFlights : annualflights,
  DailyFlights : dailyflights,
  Expenditures : expenditures,
  AvgStay : avgstay,
  HawaiiVisitors : hawaiivisitors
};