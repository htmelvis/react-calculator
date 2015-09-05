var React = require('react');
module.exports = React.createClass({
    render: function(){
      return (
          <div className="form-group">
            <label for="price-mod">Price Modifier Selections:</label>
            <select name="price-mod" className="price-mod" id="price-mod">
              <option value="Choose Modifier">Choose a modifier</option>
              <option value="Choose Modifier">Product Variation 1</option>
              <option value="Choose Modifier">Product Variation 2</option>
              <option value="Choose Modifier">Product Variation 3</option>
            </select>
          </div>
      );
    }
});