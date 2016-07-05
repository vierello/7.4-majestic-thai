var Backbone = require('backbone');

var Meal = Backbone.Model.extend({
  
});

var MealCollection = Backbone.Collection.extend({
  model: Meal,

});

module.exports = {
  'Meal': Meal,
  'MealCollection': MealCollection
}
