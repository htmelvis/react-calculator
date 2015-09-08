var React = require('react');

//This will house the pieces of the calculator and also let it be
module.exports = React.createClass({
  getDefaultProps: function(){
    return {
      style: 'Blocky',
      color: 'green',
      text: 'Add to Cart'
    }
  },
  render: function(){
    return (
        <input type="submit" className="calc-submit" value={this.props.text} name="submitBtn" />
    );
  }
});