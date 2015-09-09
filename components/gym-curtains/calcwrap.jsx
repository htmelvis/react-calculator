React = require('react');
//Insert calculator component
var GymCalc = require('./gymcalc');
//Insert visual representation of curtain component
var Visual = require('./visual');

module.exports = React.createClass({
  render: function(){
    return <div>
      <div className="col-sm-6">
        <h2>Calc</h2>
        {/* Todo configure props/state on gymcalc */}
        <Gymcalc />
      </div>

      <div className="col-sm-6">
        <h2>Graphic</h2>
        {/* Todo configure props/state on visual */}
        <Visual />
      </div>
    </div>
  }
});
