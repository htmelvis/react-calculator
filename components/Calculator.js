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
      currentPrice: 0
    };
  },
  getInputVal: function(e){
    //Typecast input (string) into an integer
    var inputVal = parseInt(e.target.value);
    console.log(typeof inputVal);
    //check if it is a number and that it is able to be rounded
    if((typeof inputVal == "number") && Math.floor(inputVal) === inputVal){
      this.setState({
        currentPrice: inputVal * this.state.currentPrice
      })
    } else {
      console.log('not a number do something now');
    }
  },
  updatePrice: function(e){
    var modifiedPrice;
    var selectOptions = e.target.options;
    //loop over the options and see if they modify the price
    _.map(selectOptions, function(option, index){
      if(option.selected && option.attributes['data-price']){
        modifiedPrice = option.attributes['data-price'].value;
      }
    });

    this.setState({
      currentPrice: modifiedPrice
    });

    console.log('updated', e.target.value, 'the target itself', e.target.options);
    console.info(e.target);
  },
  loadDataFile: function(){
    var dataFile = this.props.dataFile + '.json';
    $.get('../data/'+dataFile, function(data){
        console.log(data);
        if(this.isMounted()){
          this.setState({
            fcdata: data.fcdata,
            calcTitle: data.calcdata.calcTitle,
            titleBgColor: data.calcdata.titleBgColor,
            inputdata: data.inputdata
          });
        }
    }.bind(this));
  },
  componentDidMount: function() {
    console.log('component is now mounted');
    // Load the data file that is passed in
    // by the calculator file in the main App.js
    this.loadDataFile();
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
          <InputList inputVal={this.getInputVal}
                     update={this.updatePrice}
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
    return string.replace(TRIM_RE, '')
  }
}();
