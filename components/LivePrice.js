var React = require('react');
//This will house the pieces of the calculator and also let it be
module.exports = React.createClass({
  //TODO: If the price is set at default (0) then lets make it hidden
  render: function(){
    return (
        <p>${this.props.price}</p>
    );
  }
});