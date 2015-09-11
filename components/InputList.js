var React = require('react');
var _ = require('lodash');
//Components that make up the Calculator
//--Select for modifying the product and price
var SelectInput = require('./SelectInput');

//--Input element that takes in the type and details
var SecureInput = require('./SecureInput');

//This will house the pieces of the calculator and also let it be
module.exports = React.createClass({
  render: function() {
      var updatePrice = this.props.update;
     //TODO: Set a price value that trickles down into the options so we
    //Can receive the elements back at this level.
      return (
          <div>
          {this.props.data.map(function (input, index) {
          if (input.inputType === 'input') {
            return <SecureInput label={input.label} key={index} type="text" name={input.name} />
          } else if (input.inputType === 'select') {
            return <SelectInput update={updatePrice}
                                label={input.label}
                                key={index}
                                name={input.name}
                                data={input} />
          }
          })
          }
      </div>
    );
  }
});


