var React = require('react');

var exampleData = [
  {modifierName: 'Twine Size #32', price: 32},
  {modifierName: 'Twine Size #65', price: 23},
  {modifierName: 'Twine Size #322', price: 332}
];

module.exports = React.createClass({
    buildSelectOptions: function(values){
      return values.map(function(value){
        return <option value={value.modifierName}>{value.modifierName} - {value.price}</option>
      });
    },
    setPrice: function(e){
      if(this.props.affectPrice){
        console.log('Price Updated');
        console.log(e.target.selected);
      } else {
        console.log('Price is the same');
      }
    },
    render: function(){
      return (
          <div className="form-group">
            <label for="price-mod">Modifying Price Selections:</label>
            <select onChange={this.setPrice} name={this.props.identifier} className="price-mod">
              <option>Choose a type</option>
              {this.buildSelectOptions(exampleData)}
            </select>
          </div>
      );
    }
});