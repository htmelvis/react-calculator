var React = require('react');

module.exports = React.createClass({
    getInitialState: function(){
      return {
        name: '',
        label: ''
      }
    },
    buildSelectOptions: function(){
      var values = this.props.data;
      return values.map(function(value){
        return <option value={value.modName}>{value.modName} - {value.price}</option>
      });
    },
    setPrice: function(e){

    },
    render: function(){
      return (
          <div className="form-group">
            <label htmlFor="price-mod">{this.props.label}:</label>
            <select onChange={this.setPrice} name={this.props.name} className="price-mod">
              <option>Choose a type</option>
              {this.buildSelectOptions()}
            </select>
          </div>
      );
    }
});