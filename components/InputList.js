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
      currentPrice: undefined
    }
  },
  updatePrice: function(e){
    this.setState({
      currentPrice: e.target.value
    })
  },
  render: function(){
    var inputs = this.props.data.map(function(input, index){
      if(input.inputType === 'input'){
        return <SecureInput label={input.label} key={index} type="text" name={input.name}  />
      } else if(input.inputType === 'select'){
        return <SelectInput label={input.label}
                            key={index}
                            name={input.name}
                            data={input}

            />
      }
    });
    return (
        <div>
          {inputs}
        </div>
    );
  }
});


