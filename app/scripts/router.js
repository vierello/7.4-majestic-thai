var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var orders = require('./models/orders');
var meals = require('./models/meals');
var AppComponent = require('./components/menu.jsx');
var HomePage = require('./components/home.jsx');
var StoreComponent = require('./components/store.jsx');

var Router = Backbone.Router.extend({
  routes: {
    '': 'index',
    'menu/': 'menu',
    'store/': 'store'
  },

  index: function(){
    ReactDOM.render(
      React.createElement(HomePage),
      document.getElementById('container')
    )
  },

  menu: function(){
    var mealCollection = new meals.MealCollection();
    var order = new orders.Order();
    ReactDOM.render(
      React.createElement(AppComponent, {dishes: mealCollection, order: order}),
      document.getElementById('container')
    );

    mealCollection.add([
      {'title': 'Yellow Curry' ,'description': 'Mild yellow curry, containing rich flavors of curry powder, coconut milk, potatoes, onions and carrots.', 'price': '$10.50'},
      {'title': 'Pad Thai', 'description': 'One of the most famous Thai rice noodles dish cooked with egg, bean spouts, tofu and sprinkled with ground peanut.', 'price': '$10.50'},
      {'title': 'Orange Chicken', 'description': 'Deep fried chicken sauteed in a tangy orange sauce.', 'price': '$10.50'},
      {'title': 'Duck Basil', 'description': 'Sliced boneless roasted duck, sauteed with bell peppers, green beans, onions and basil leaves, in a spicy homemade sauce.', 'price': '$16.50'},
      {'title': 'Fresh Spring Rolls (2 pcs.)', 'description': 'Spring roll sheets freshly wrapped with back tofu, carrots, lettuce, cucumbers, mint basil, and crystal thread noodles. They are served with peanut sauce.', 'price': '$6.50'},
      {'title': 'Rad Na', 'description': 'Stir fried rice noodle mixed black bean sauce, with choice of meat, broccoli, or Chinese broccoli, and homemade gravy sauce.', 'price': '$10.50'},
      {'title': 'Chow Mein', 'description': 'Stir fried with yellow rounded noodles with vegetables in home made sauce.', 'price': '$10.50'},
      {'title': 'Deep Fried Whole Fish', 'description': 'Deep fried whole fish (Golden Pompano) with your choice of spicy basil, three flavors, ginger or panag.', 'price': '$16.50'},
      {'title': 'Tom Kha Soup - Bowl', 'description': 'Coconut soup with your choice of chicken, tofu, vegetable, or shrimp for an additional charge. Served with mushrooms, onions, lime leaves, galangal and lime juice', 'price': '$6.50'},
      {'title': 'Prink-Khing', 'description': 'A special chili paste sauteed with green beans, bell peppers and Thai basil leaves.', 'price': '$10.50'}
    ]);
  },

  // store: function(){
  //   ReactDOM.render(
  //     React.createElement(StoreComponent),
  //     document.querySelector('.main-display')
  //   );
  // }
});

var router = new Router();

module.exports = router;
