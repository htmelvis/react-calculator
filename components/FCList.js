var React = require('react');
//--Hidden FoxyCart Fields
var _ = require('lodash');
//This will house the pieces of the calculator and also let it be
module.exports = React.createClass({
  getInitialState: function(){
    return{
      FCProd: '',
      FCVal: ''
    }
  },
  render: function(){
    var inputs = this.props.data.map(function(input){
      return <input type="hidden" name={input.FCProd} value={input.FCVal} />
    });
    return <div>
      {inputs}
    </div>
  }
});
