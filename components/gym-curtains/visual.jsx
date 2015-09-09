var React = require('react');
var $ = require('jquery');
//Todo get Greensock loaded

var height = document.getElementById("height");
var width = document.getElementById("width");
var slider = document.getElementById("ratio");
//Get diagram labels
var topLabel = document.getElementById("top-label");
var bottomLabel = document.getElementById("bottom-label");
var currentLabel = document.getElementById("current-label");
var livePrice = document.getElementById("liveprice");
var finalPrice = document.getElementById("finalprice");
var split = document.getElementById("split");
var color = document.getElementById("color");
//Gets the SVG Rectangle of Vinyl
var vinyl = $("#vinyl");
var vinylHeight;

//Set Global variables
var gymCurtain = {
  setColor: function (color) {
    TweenMax.to(vinyl, .2, {fill: color});
  },
  setSqFtPrice: function () {
    this.priceSqFt = (this.sqFt >= 500) ? 3.42 : 3.90;
  },
  calculate: function () {
    this.currentPrice = this.priceSqFt * this.sqFt;
  },
  setCurtainSize: function (percentage) {
    vinylHeight = 100 - this.percentage;
    TweenMax.to(vinyl, .2, {
      attr: {y: vinylHeight + "%"}
    });
    TweenMax.to(currentLabel, .2, {bottom: this.percentage + "%"});
  },
  updateValues: function () {
    //calc % of max
    gymCurtain.percentage = (slider.value / slider.max) * 100;
    //Translate to y value needed for vinyl tween

    this.setSqFtPrice();
    this.calculate();

    currentLabel.innerHTML = slider.value + " Feet";
    if (!isNaN(gymCurtain.currentPrice)) {
      finalPrice.value = gymCurtain.currentPrice;
      livePrice.innerHTML = '$' + gymCurtain.currentPrice;
    }
    if (!isNaN(gymCurtain.newMax)) {
      topLabel.innerHTML = gymCurtain.newMax + " Feet";
    }
    split.value = (slider.max - slider.value ) + ' feet Mesh ' + slider.value + ' feet Vinyl';
    this.setCurtainSize(this.percentage);
  }
};

var inputWatcher = function (input) {
  //save initial value
  $(input).focus(function () {
    var timer = setInterval(function () {
      //set up conditional to check if or not empty
      gymCurtain.sqFt = parseInt(height.value) * parseInt(width.value);
      //set new slider capacity
      gymCurtain.newMax = parseInt(height.value);
      slider.max = gymCurtain.newMax;
      gymCurtain.updateValues();
    });
    $(this).blur(function () {
      clearInterval(timer);
    });
  });

};

inputWatcher('#height');
inputWatcher('#width');
//console.log(gymCurtain);

$('#ratio').on("change mousemove", function () {
  gymCurtain.updateValues();
});

$('#color').change(function () {
  switch (this.value) {
    case "Black {c+BLK}":
      gymCurtain.setColor("#222");
      break;
    case "Gray {c+G}":
      gymCurtain.setColor("#bababa");
      break;
    case "Red {c+R}":
      gymCurtain.setColor("#e2361f");
      break;
    case "Royal Blue {c+RB}":
      gymCurtain.setColor("#3b5b93");
      break;
    case "Tan {c+T}":
      gymCurtain.setColor("#d2b48c");
      break;
    case "White {c+W}":
      gymCurtain.setColor("#fff");
      break;
    case "Yellow {c+Y}":
      gymCurtain.setColor("#ffff19");
      break;
    default:
      console.log("error");
  }
});

module.exports  = React.createClass({
  render:function(){
    return <span>THIS IS VISUAL</span>


  }
});
