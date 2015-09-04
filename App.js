//Main Logic for the React-Calculator
var React = require('react');
var $ = require('jquery');
var _ = require('lodash');

var Calculator = React.createClass({
  render: function(){
    return (
        <input type="text"
               className="calculator-length" />
    );
  }
});

React.render(<Calculator/>, document.getElementById('calc'));