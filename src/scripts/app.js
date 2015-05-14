var debug = require('debug')('app');
var Fluxxor = require('fluxxor');

var stores = { };
var actions = { };

var flux = new Fluxxor.Flux(stores, actions);
flux.on("dispatch", function(type, payload) {
  debug("Dispatch:", type, payload);
});

module.exports = flux;
