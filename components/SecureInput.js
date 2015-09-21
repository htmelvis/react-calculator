var React = require('react');
module.exports = React.createClass({
  componentDidMount: function(){
    var setType = this.props.calcType;
    var name = this.props.name;
    setType(name);
  },
  render: function(){
    return (
        <div className="form-group">
          <label className="control-label">{this.props.label}:</label>
          <input ref={this.props.name}
                 type={this.props.type}
                 className="calc-input"
                 name={this.props.name}
                 onChange={this.props.update} />
        </div>
    );
  }
});