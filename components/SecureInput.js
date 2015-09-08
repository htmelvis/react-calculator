var React = require('react');

module.exports = React.createClass({
  //validateInput: function(props, propName, componentName) {
  //  if (props, propName, componentName) {
  //    return new Error('Validation failed!' + props);
  //  }
  //},
  componentDidMount: function(){
    console.log('secure input is now mounted');
  },
  getDefaultProps: function(){
    //number
  },
  propTypes: {
    //number: React.propTypes.number.isRequired
  },
  getInitialState: function(){
    return {
      //inputVal: 'Please fill me out',
      id: 0
    }
  },
  checkInput: function(e){
    console.log("You left the input", e.target);

  },
  update: function(e){
    console.log(e.target.value);
    this.setState({
      //inputVal: e.target.value
    });
  },
  render: function(){
    return (
        <div className="form-group">
          <label className="control-label">{this.props.label}:</label>
          <input type={this.props.inputType}
                 className="calc-input"
                 name={this.props.name}
                 onChange={this.update}
                 onBlur={this.checkInput} />
        </div>
    );
  }
});