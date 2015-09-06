var React = require('react');

module.exports = React.createClass({
  render: function(){
    return (
        <input type="hidden" name={this.props.name}  />
    );
  }
});