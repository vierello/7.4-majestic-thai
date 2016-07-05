var React = require('react');
var orders = require('../models/orders');


var OrderComponent = React.createClass({

  createNewOrder: function(){
    this.props.order.save()
  },

  componentWillMount: function(){
    var self = this;
      this.props.order.on('change', function(){
      self.update()
    });
  },

  update: function(){
    this.forceUpdate();
  },

  render: function(){
    //console.log(this.props.order);
    var orderList = this.props.order.get('items').map(function(model){
      return(
        <li key={model.cid}>
          {model.get('title')} {model.get('price')}
        </li>
      )
    });
    //console.log(orderList.order.get('title'));
    return (
      <div className="order-section well">
        <h3>Order</h3>
        <ul>
          {orderList}
        </ul>
        <hr></hr>
        <button onClick={this.createNewOrder} type="submit" className="order-button btn btn-success">Place Order</button>
      </div>
    )
  }
});

var MenuComponent = React.createClass({

  addToCart: function(dish){
    var newOrderItems = this.props.order.get('items');
    newOrderItems.push(dish)
    this.props.newOrderItem();
  },

  render: function(){
    var collection = this.props.dishes;
    var self = this;
    var eachDish = collection.map(function(dish){
      return (
        <li className="well menu-item" key={dish.cid}>
          <span className="dish-name">{dish.get('title')}</span>
          <button onClick={function(){self.addToCart(dish)}} className="price">{dish.get('price')}</button>
          <span className="description">{dish.get('description')}</span>
        </li>
      )
    });
    return (
      <ul>
        {eachDish}
      </ul>
    )
  }
});

var AppComponent = React.createClass({
  // getInitialState: function(){
  //   return {
  //     'title': '',
  //     'description': '',
  //     'price': ''
  //   }
  // },

  componentWillMount: function(){
    var self = this;
    this.props.dishes.on('add', function(){
      self.update()
    });
  },

  update: function(){
    this.forceUpdate();
  },

  newOrderItem: function(){
    this.forceUpdate()
  },

  render: function(){
    console.log(this.props.order);
    return (
      <div className="wrapper1">
        <div className="row">
          <nav className="media-nav-bar col-md-12">
            <a className="home-link" href="#/">Home</a>
            <a className="media-link" href="#"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
            <a className="media-link" href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
          </nav>
        </div>
        <div className="row">
          <header className="header col-md-12">
            <h1 className="menu-page-logo">Majestic Thai</h1>
            <h3>Fine Thai Cuisine</h3>
          </header>
        </div>
        <div className="row">
          <nav className="menu-nav-bar">
            <a onClick={this.displayDirections} href="#menu/">Directions</a>
            <a href="#store/">Store</a>
            <div className="dropdown">
              <a href="#" className="dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown">
                Hours
                <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li>M-F: 11am-9pm</li>
                <li>Sat: 11am-11pm</li>
                <li>Sun: 11am-8pm</li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="main-display row">
          <div className="menu-list col-md-offset-1 col-md-7">
            <MenuComponent newOrderItem={this.newOrderItem} order={this.props.order} dishes={this.props.dishes} menuItems={this.state} />
          </div>
          <div className="col-md-3">
            <OrderComponent order={this.props.order}/>
          </div>
        </div>
      </div>
    )
  },
});

module.exports = AppComponent;
