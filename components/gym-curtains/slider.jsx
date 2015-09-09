var React = require('react');
var $ = require('jquery');

var Slider  = React.createClass({
  render: function() {
    return (
        <input id="ratio" type="range" min="0" max="5" step="1" />
    )
  }
});

module.exports = Slider ;

