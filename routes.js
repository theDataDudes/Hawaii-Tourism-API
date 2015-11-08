var Controller = require('./controller')

//defining routes
exports.endpoints = [
  { method : 'GET', path : '/annual', config : Controller.getAnnual },

  { method : 'GET', path : '/daily', config : Controller.getDaily },

  { method : 'GET', path : '/expenditures', config : Controller.getExpenditures }
];

