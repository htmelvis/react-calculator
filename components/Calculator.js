var React = require('react');

//Components
var PriceModifier = require('./PriceModifier');
//Create an input that takes in the type of input that it is
//What it requires(number, etc)
//This input should have basic validations like
// --cannot be empty --must be a number
var SecureInput = require('./SecureInput');
var FCInput = require('./FCInput');
require('./calculator.scss');
//This will house the pieces of the calculator and also let it be
module.exports = React.createClass({
  processForm: function(){
    console.log('Hey you processed it');
    return false;
  },
  render: function(){
    return (
        <form className="calculator" onSubmit={this.processForm} method="post">
          <FCInput name="name" value="" />
          <FCInput name="price" value="" />
          <FCInput name="code" value="" />
          <FCInput name="image" value="" />
          <PriceModifier identifier="Twine Size" affectPrice="true" />
          <SecureInput label="Length" name="Length" inputType="text" />
          <SecureInput label="Width" name="Width" inputType="text" />
          <PriceModifier/>
          <input type="submit" className="calc-submit" value="Buy Product" name="submitBtn" />
        </form>
    );
  }
});