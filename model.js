var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var AnnualSchema = new Schema({
  JAPAN : {
    type : String
  },
  created : {
    type : Date,
    default : Date.now
  }
})
var annualflights = Mongoose.model('annualflight', AnnualSchema);

module.exports = {
  AnnualFlights : annualflights
};