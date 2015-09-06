var React = require('react');

module.exports = React.createClass({
  //validateInput: function(props, propName, componentName) {
  //  if (props, propName, componentName) {
  //    return new Error('Validation failed!' + props);
  //  }
  //},
  //propType: this.validateInput(),
  render: function(){
    return (
        <div>
          <label className="control-label">{this.props.label}</label>
          <input type="text"
                 className="calculator-length" />
        </div>
    );
  }
});