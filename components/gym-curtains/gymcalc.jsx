var React = require('react');

module.exports = React.createClass({
  render:function(){
    return  <form action="https://secure.usnetting.com/cart" method="POST" acceptCharset="utf-8">
      <legend>Size Calculator</legend>
      <p className="text-center">Please be sure to choose color, width, height, &amp; use the slider to choose mesh to vinyl ratio before adding your item to the cart.</p>
      <div className="form-group">
        <input type="hidden" name="name" value="Custom Gym Curtain" />
        <input id="finalprice" type="hidden" name="price" value="3.42" />
        <input type="hidden" name="code" value="CGC-" />
        <input id="split" type="hidden" name="split" value="init" />

        <div className="columns small-12 medium-12 large-12">
          <label className="control-label" >Vinyl Color</label>
          <select name="color" id="color" className="form-control">
            <option value="Black {c+BLK}">Black</option>
            <option value="Gray {c+G}">Gray</option>
            <option value="Red {c+R}">Red</option>
            <option value="Royal Blue {c+RB}">Royal Blue</option>
            <option value="Tan {c+T}">Tan</option>
            <option value="White {c+W}">White</option>
            <option value="Yellow {c+Y}">Yellow</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="columns small-12 medium-6 large-6">
          <label className="control-label">Width <span data-tooltip aria-haspopup="true" className="tt has-tip" href="#" title="Please specify in whole feet or decimal no fractions. See order considerations below for how to measure.">?</span></label>
          <input className="dimensions required number" id="width" type="text" />
        </div>
        <div className="columns small-12 medium-6 large-6">
          <label className="control-label" >Height <span data-tooltip aria-haspopup="true" className="tt has-tip" href="#" title="Please specify in whole feet or decimal no fractions. See order considerations below for how to measure.">?</span></label>
          <input  id="height" className="dimensions required number"  type="text" />
        </div>
      </div>
      <div className="form-group">
        <div className="columns small-4">
          <label className="control-label" >Price:</label>
        </div>
        <div className="columns small-8">
          <span id="liveprice">$</span>
        </div>
      </div>
      <input type="submit" value="Add to Cart" className="btn btn-buy btn-block submit" />
    </form>
  }
});