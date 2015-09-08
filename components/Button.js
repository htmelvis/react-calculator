var React = require('react');

//This will house the pieces of the calculator and also let it be
module.exports = React.createClass({
  render: function(){
    return (
        <input type="submit" className="calc-submit" value="Buy Product" name="submitBtn" />
    );
  }
});