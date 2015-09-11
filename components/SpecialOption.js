var React = require('react');

//This will house the pieces of the calculator and also let it be
module.exports = React.createClass({
  render: function() {
    var data = this.props.data;
    return <option price={data.price} value={data.optionsVal}> {data.optionVal} - ${data.price}</option>
  }
});


