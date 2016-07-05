var React = require('react');

var HomePage = React.createClass({
  render: function(){
    return (
      <div className="wrapper">
        <span>Welcome To</span>
        <h1 className="restaurant-logo">Majestic Thai</h1>
        <span>A Fine Dining Experience</span>
        <a href="#menu/"><button className="btn btn-success">Go To Menu</button></a>
      </div>
    );
  }
});

module.exports = HomePage;
