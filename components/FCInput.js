var React = require('react');

module.exports = React.createClass({
  getDefaultProps: function(){
    return {
      FCProd: '',
      FCVal: ''
    }
  },
  render: function(){
    return (
        <input type="hidden" name={this.props.FCProd} value={this.props.FCVal}  />
    );
  }
});