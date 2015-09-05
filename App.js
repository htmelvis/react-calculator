//Main Logic for the React-Calculator
var React = require('react');
var $ = require('jquery');
var _ = require('lodash');

//Components
require('./components/inputField.scss');

var PriceModifier = require('./components/PriceModifier');
//Create an input that takes in the type of input that it is
//What it requires(number, etc)
//This input should have basic validations like
// --cannot be empty --must be a number
var SecureInput = React.createClass({
  //validateInput: function(props, propName, componentName) {
  //  if (props, propName, componentName) {
  //    return new Error('Validation failed!' + props);
  //  }
  //},
  //propType: this.validateInput(),
  render: function(){
    return (
        <div>
          <label className="control-label">{this.props.label}</label>
          <input type="text"
                 className="calculator-length" />
        </div>
    );
  }
});
//This will house the pieces of the calculator and also let it be
//bound to the DOM
var Calculator = React.createClass({
  render: function(){
    return (
        <form className="calculator" action="https://secure.usnetting.com/cart" method="post">
          <SecureInput label="Length" inputType="text" />

          <SecureInput label="Width" inputType="text" />

          <PriceModifier/>
          <input type="submit" value="Buy Product" name="submitBtn" />
        </form>
    );
  }
});

React.render(<Calculator/>, document.getElementById('calc'));