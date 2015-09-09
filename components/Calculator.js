var React = require('react');
var $ = require('jquery');
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
    return {

    }
  },
  getInitialState: function(){
    return {
      calcTitle: 'Initial Title',
      titleBgColor: 'green',
      fcdata: []
    };
  },
  loadDataFile: function(){
    var dataFile = this.props.dataFile + '.json';
    $.get('../data/'+dataFile, function(data){
        console.log(data);
        if(this.isMounted()){
          this.setState({fcdata: data.fcdata});
          this.setState({
             calcTitle: data.calcdata.calcTitle,
             titleBgColor: data.calcdata.titleBgColor
          })
        }
    }.bind(this));
  },
  calcStyle: {
    //TODO: Use radium to manage the styles of Inline
    backgroundColor: 'red'
  },
  componentDidMount: function() {
    console.log('component is now mounted');
    this.loadDataFile();
  },
  render: function(){
    return (
        <form className="calculator" name="calculator" method="post">
          <h3>{this.state.calcTitle}</h3>
          <p>{this.state.titleBgColor}</p>
          <FCList data={this.state.fcdata} />
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
