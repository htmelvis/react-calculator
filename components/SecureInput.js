var React = require('react');
module.exports = React.createClass({
  render: function(){
    return (
        <div className="form-group">
          <label className="control-label">{this.props.label}:</label>
          <input type={this.props.type}
                 className="calc-input"
                 name={this.props.name}
                 onChange={this.props.update} />
        </div>
    );
  }
});