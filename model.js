var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

//need to redefine this schema
var AnnualSchema = new Schema({
  '2008-JAPAN' : {
    type : String
  },
  created : {
    type : Date,
    default : Date.now
  }
})

//models for each collection
var annualflights = Mongoose.model('annualflight', AnnualSchema);

var dailyflights = Mongoose.model('dailyflight', AnnualSchema);

var expenditures = Mongoose.model('expenditure', AnnualSchema);

module.exports = {
  AnnualFlights : annualflights,
  DailyFlights : dailyflights,
  Expenditures : expenditures
};