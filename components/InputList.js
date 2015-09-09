var React = require('react');
//Components that make up the Calculator
//--Select for modifying the product and price
var SelectInput = require('./SelectInput');

//--Input element that takes in the type and details
var SecureInput = require('./SecureInput');

//This will house the pieces of the calculator and also let it be
module.exports = React.createClass({
  getInitialState: function(){
    return {

    }
  },
  render: function(){
    var inputs = this.props.data.map(function(input){
      if(input.inputType === 'input'){
        return <SecureInput label={input.label} type="text" name={input.name}  />
      } else if(input.inputType === 'select'){
        return <SelectInput label={input.label} name={input.name} data={input.options} />
      }
    });
    return (
        <div>
          {inputs}
        </div>
    );
  }
});


