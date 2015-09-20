var React = require('react/addons');
// TODO: React/addons is an experimental feature but gives extended tools for React
var $ = require('jquery');
var _ = require('lodash');
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
  getDefaultProps: function(){
    return {};
  },
  getInitialState: function(){
    return {
      calcTitle: 'Initial Title',
      titleBgColor: 'green',
      fcdata: [],
      inputdata: [],
      initialPrice: 0,
      currentPrice: 0,
      currentTotalPrice: 0,
      addOnTotal: 0,
      priceModifier: 0,
      calculatorType: 'default'
    };
  },
  calculateSF: function(price, length, width){
    //this method should take in input value(s)
    //Is this a linear or square foot calculation?
    //Do we need to access the price hidden input or do we
    //grab the price from the dropdown that is currently set
  },
  calculateLF: function(price, length){
    //This method with calculate linear foot price on fixed height/width products

  },
  calculateAddOns: function(price, qty, addon){
    //This method will recalculate the addons once they have been added.
    //once this calculation takes place return the additional amount to be added
    //to the overall total price for calculation
    //Is it a one time price
    //Is it perimeter based?
  },
  getInputVal: function(e){
    //Typecast input (string) into an integer

    var inputVal = parseInt(e.target.value);
    //check if it is a number and that it is able to be rounded
    //remove validation to a mixin of validation tools
    if((typeof inputVal == "number") && Math.floor(inputVal) === inputVal){
      //this function shouldn't update the currentPrice explicitly but run an external method that

      //calcs and sets the price
    } else {
      //incorrect value
    }
  },
  getSelectedOption: function(e){
      var options = e.target.options;
      var attrs = options[options.selectedIndex].attributes;
      if(attrs['data-price']) {

        var selectedPrice = options[options.selectedIndex].attributes['data-price'].value;

      } else {
        var selectedPrice = this.state.currentPrice;
      }

     return selectedPrice;
  },
  setCalcType: function(){
    //map over the inputs in the form and determine if SF/LF/Default
    var calc = React.findDOMNode(this);
    console.log(this.refs.f)

  },
  setNewPrice: function(e){
    var selectedPrice = this.getSelectedOption(e);

    this.setState({
      currentPrice: selectedPrice
    });
  },
  loadDataFile: function(){
    var dataFile = this.props.dataFile + '.json';
    $.get('../data/'+dataFile, function(data){
        var initialPrice = _.result(_.findWhere(data.fcdata, { FCProd: 'price' }), 'FCVal');
        if(this.isMounted()){
          this.setState({
            fcdata: data.fcdata,
            calcTitle: data.calcdata.calcTitle,
            titleBgColor: data.calcdata.titleBgColor,
            inputdata: data.inputdata,
            initialPrice: initialPrice
          });
        }
    }.bind(this));
  },
  componentDidMount: function() {
    console.log('component is now mounted');
    // Load the data file that is passed in
    // by the calculator file in the main App.js
    this.loadDataFile();
    //Figure out what kind of calculator type we have (SF/LF/Default)
    this.setCalcType();
  },
  render: function(){
    var styles = React.addons.classSet;
    var classes = styles({
      'calculator': true
    });
    var titleStyle = { backgroundColor: this.props.titleBgColor};
    return (
        <form className={classes} name="calculator" method="post">
          <h3 style={titleStyle}>{this.state.calcTitle}</h3>
          <FCList data={this.state.fcdata} />
          <InputList select={this.getSelectedOption}
                     inputVal={this.getInputVal}
                     update={this.setNewPrice}
                     currentPrice={this.state.currentPrice}
                     data={this.state.inputdata} />
          <Button />
          <LivePrice refs="currentPriceBox" price={this.state.currentPrice} />
        </form>
    );
  }
});

// Utility to trim inputs
var trim = function() {
  var TRIM_RE = /^\s+|\s+$/g;
  return function trim(string) {
    return string.replace(TRIM_RE, '');
  }
}();
