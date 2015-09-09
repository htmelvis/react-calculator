var React = require('react');
//Insert calculator component
var GymCalc = require('./gymcalc.jsx');
//Insert visual representation of curtain component
var Visual = require('./visual.jsx');

module.exports = React.createClass({
  render: function(){
    return <div>
      <div className="col-sm-6">
        <h2>Calc</h2>
        {/* Todo configure props/state on gymcalc */}
        <GymCalc />
      </div>

      <div className="col-sm-6">
        <h2>Graphic</h2>
        {/* Todo configure props/state on visual */}
        <Visual />
      </div>
    </div>
  }
});
