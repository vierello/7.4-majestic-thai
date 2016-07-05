var Backbone = require('backbone');

var Order = Backbone.Model.extend({
  defaults: {
    'items': []
  },
  urlRoot: 'https://tiny-lasagna-server.herokuapp.com/collections/v-thai-orders'
});

var OrderCollection = Backbone.Collection.extend({
  model: Order,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/v-thai-orders'
});

module.exports = {
  'Order': Order,
  'OrderCollection': OrderCollection
};
