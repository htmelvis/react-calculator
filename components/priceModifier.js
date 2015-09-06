var React = require('react');
module.exports = React.createClass({
    setPrice: function(){
      if(this.props.affectPrice){
        console.log('Price Updated');
      } else {
        console.log('Price is the same');
      }
    },
    render: function(){
      return (
          <div className="form-group">
            <label for="price-mod">Modifying Price Selections:</label>
            <select onChange={this.setPrice} name={this.props.identifier} className="price-mod">
              <option value="Choose Modifier">Choose a modifier</option>
              <option value="Choose Modifier">Product Variation 1</option>
              <option value="Choose Modifier">Product Variation 2</option>
              <option value="Choose Modifier">Product Variation 3</option>
            </select>
          </div>
      );
    }
});