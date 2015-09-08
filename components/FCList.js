var React = require('react');

//--Hidden FoxyCart Fields
var FCInput = require('./FCInput');

//This will house the pieces of the calculator and also let it be
module.exports = React.createClass({
  render: function(){
    return (
        <div>
          <FCInput FCProd="name"/>
          <FCInput FCProd="price"/>
          <FCInput FCProd="code"/>
          <FCInput FCProd="image"/>
        </div>
    );
  }
});