var React = require('react');
module.exports = React.createClass({
    getInitialState: function(){
      return {
        name: '',
        label: ''
      }
    },
    buildSelectOptions: function(){
      var values = this.props.data.options;
      return values.map(function(value, index){
        return <option data-price={value.price} value={value.optionVal} key={index} data-mod={value.modifier}>{value.optionVal}</option>
      });
    },
    render: function(){
      return (
          <div className="form-group">
            <label>{this.props.label}:</label>
            <select onChange={this.props.update} prodPrice={this.props.prodPrice} name={this.props.data.name} className="price-mod">
              <option>{this.props.data.defaultOption}</option>
              {this.buildSelectOptions()}
            </select>
          </div>
      );
    }
});