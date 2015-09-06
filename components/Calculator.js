var React = require('react');

//Components
var PriceModifier = require('./PriceModifier');
//Create an input that takes in the type of input that it is
//What it requires(number, etc)
//This input should have basic validations like
// --cannot be empty --must be a number
var SecureInput = require('./SecureInput');
require('./calculator.scss');
//This will house the pieces of the calculator and also let it be
module.exports = React.createClass({
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