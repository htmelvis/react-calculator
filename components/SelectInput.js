var React = require('react');
//var SpecialOption = require('./SpecialOption');
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
        //if(value.price){
          //return <SpecialOption data={value} key={index} />
        //} else {
          return <option value={value.optionVal} key={index}>{value.optionVal}</option>
        //}
      });
    },
    render: function(){
      return (
          <div className="form-group">
            <label>{this.props.label}:</label>
            <select onChange={this.props.update} name={this.props.data.name} className="price-mod">
              <option>{this.props.data.defaultOption}</option>
              {this.buildSelectOptions()}
            </select>
          </div>
      );
    }
});