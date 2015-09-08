var React = require('react');

//Components that make up the Calculator
//--Select for modifying the product and price
var PriceModifier = require('./PriceModifier');
//--Input element that takes in the type and details
var SecureInput = require('./SecureInput');


//This will house the pieces of the calculator and also let it be
module.exports = React.createClass({
  render: function(){
    return (
        <div>
          <PriceModifier identifier="Twine Size" affectPrice="true" />
          <SecureInput ref="Length" required="true" label="Length" name="Length" inputType="text" />
          <SecureInput ref="Width" required="true"  label="Width" name="Width" inputType="text" />
          <PriceModifier required="true" />
        </div>
    );
  }
});
