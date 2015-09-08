var React = require('react');

//--Hidden FoxyCart Fields
var FCInput = require('./FCInput');

//This will house the pieces of the calculator and also let it be
module.exports = React.createClass({
  render: function(){
    return (
        <div>
          <FCInput name="name" />
          <FCInput name="price" />
          <FCInput name="code" />
          <FCInput name="image" />
        </div>
    );
  }
});