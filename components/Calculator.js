var React = require('react');

//Components that make up the Calculator
//--List of FoxyCart Components for the Form
var FCList = require('./FCList');
//--List of SecureInputs and Price Modifiers
var InputList = require('./InputList');
//--LivePrice component which states and updates the price
var LivePrice = require('./LivePrice');
//--Button Component for the Calculator
var Button = require('./Button');

//Calculator Styles
require('./calculator.scss');

//This will house the pieces of the calculator and also let it be
module.exports = React.createClass({
  //getInitialState: function(){
  //  //return {
  //  //  errors: {},
  //  //  name: '',
  //  //  price: '',
  //  //  code: '',
  //  //  image: ''
  //  //}
  //},
  //getDataFromInput: function(){
  //  //var data = {
  //  //  width: this.refs.Width.getDOMNode().value,
  //  //  length: this.refs.Length.getDOMNode().value
  //  //  //TODO: Commit to changing the way price mods are set in PriceMod File
  //  //  // priceModifier: this.refs.productPriceMod.getDOMNode().selected
  //  //};
  //  //return data;
  //},
  //componentDidMount: function() {
  //  //console.log('component is now mounted');
  //  //this.setState({
  //  //  price: 999,
  //  //  code: 'XYZ-CODE',
  //  //  name: 'Some Name Product',
  //  //  image: 'some/src/to/an/image.jpg'
  //  //});
  //},
  //processForm: function(e){
  //  //var data = this.getDataFromInput();
  //  //console.log(data);
  //  //console.log('Hey you processed it');
  //  //return false;
  //},
  //isValid: function(){
  //  ////Grab all child nodes of form that are required
  //  //var fields = [];
  //  //var errors = {};
  //  ////loop over the fields and validate them
  //  //fields.forEach(function(field){
  //  //  var value = trim(this.refs[field].getDOMNode().value);
  //  //  if(!value) errors[field] = 'This Field is Required!';
  //  //}.bind(this));
  //  ////this.setState({errors: errors});
  //  //var isValid = true;
  //  //for (var error in errors ){
  //  //  isValid = false;
  //  //  break;
  //  //}
  //  //return isValid;
  //},
  render: function(){
    return (
        <form className="calculator" name="calculator"  method="post">
          <FCList />
          <InputList />
          <Button />
          <LivePrice />
        </form>
    );
  }
});

// Utility to trim inputs
var trim = function() {
  var TRIM_RE = /^\s+|\s+$/g;
  return function trim(string) {
    return string.replace(TRIM_RE, '')
  }
}();
