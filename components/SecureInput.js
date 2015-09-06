var React = require('react');

module.exports = React.createClass({
  //validateInput: function(props, propName, componentName) {
  //  if (props, propName, componentName) {
  //    return new Error('Validation failed!' + props);
  //  }
  //},
  getDefaultProps: function(){
    //number
  },
  getDataFromInput: function(){
    var data = {
      width: this.refs.Width.getDOMNode().value,
      length: this.refs.Length.getDOMNode().value,
      //TODO: Commit to changing the way price mods are set in PriceMod File
      // priceModifier: this.refs.productPriceMod.getDOMNode().selected
    };
    return data;
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
  update: function(e){
    this.setState({
      //inputVal: e.target.value
    })
    var data = this.getDataFromInput();
    console.log(data);
  },
  render: function(){
    return (
        <div className="form-group">
          <label className="control-label">{this.props.label}:</label>
          <input ref={this.props.name} type={this.props.inputType}
                 className="calc-input"
                 name={this.props.name}
                 onChange={this.update} />
        </div>
    );
  }
});