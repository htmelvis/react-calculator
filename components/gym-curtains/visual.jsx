var React = require('react');
var $ = require('jquery');
var GreenSock = require('gsap');
var Slider = require('./slider.jsx');



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
  //What used to be gymcurtain globals


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
  },


  render:function(){
    return <div className="curtain-wrap">
      <div className="row">
        <div className="columns small-2 medium-2 medium-offset-2 large-2 large-offset-0">
          <Slider />
        </div>
        <div className="columns small-10 medium-6 end large-10">
          <div className="curtain">
            <span id="top-label" className="top-label"> Feet</span>
            <span id="current-label" className="current-label"> Feet</span>
            <span id="bottom-label" className="bottom-label">0 Feet</span>
            <svg width="303px" height="304px" viewBox="0 0 303 304" version="1.1"><title>gym-curtains-opt copy</title><defs/><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" ><g id="gym-curtains-opt" transform="translate(1.000000, 2.000000)"><g id="Page-1" ><rect id="mesh" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" x="1" y="0.6" width="300" height="300"/><path d="M1.10087734 288.5 L300.899123 288.5" id="bottomSeam" stroke="#FFFFFF"/><rect id="Rectangle-3" fill="#FFFFFF" x="2" y="1.8" width="298" height="16.2"/><g id="grid" stroke="#CCCCCC" stroke-width="0.5"><path d="M3.5 56.2 L298.5 56.2 " id="Line"/><path d="M3.5 50.2 L298.5 50.2 " id="Line-Copy"/><path d="M3.5 44.2 L298.5 44.2 " id="Line-Copy-2"/><path d="M3.5 32.2 L298.5 32.2 " id="Line-Copy-3"/><path d="M3.5 26.2 L298.5 26.2 " id="Line-Copy-5"/><path d="M3.5 20.2 L298.5 20.2 " id="Line-Copy-6"/><path d="M3.5 38.2 L298.5 38.2 " id="Line-Copy-4"/><path d="M3.5 98.2 L298.5 98.2 " id="Line-Copy-13"/><path d="M3.5 92.2 L298.5 92.2 " id="Line-Copy-7"/><path d="M3.5 86.2 L298.5 86.2 " id="Line-Copy-8"/><path d="M3.5 74.2 L298.5 74.2 " id="Line-Copy-9"/><path d="M3.5 68.2 L298.5 68.2 " id="Line-Copy-10"/><path d="M3.5 62.2 L298.5 62.2 " id="Line-Copy-11"/><path d="M3.5 80.2 L298.5 80.2 " id="Line-Copy-12"/><path d="M3.5 140.2 L298.5 140.2 " id="Line-Copy-20"/><path d="M3.5 134.2 L298.5 134.2 " id="Line-Copy-14"/><path d="M3.5 128.2 L298.5 128.2 " id="Line-Copy-15"/><path d="M3.5 116.2 L298.5 116.2 " id="Line-Copy-16"/><path d="M3.5 110.2 L298.5 110.2 " id="Line-Copy-17"/><path d="M3.5 104.2 L298.5 104.2 " id="Line-Copy-18"/><path d="M3.5 122.2 L298.5 122.2 " id="Line-Copy-19"/><path d="M3.5 176.2 L298.5 176.2 " id="Line-Copy-40"/><path d="M3.5 170.2 L298.5 170.2 " id="Line-Copy-21"/><path d="M3.5 158.2 L298.5 158.2 " id="Line-Copy-22"/><path d="M3.5 152.2 L298.5 152.2 " id="Line-Copy-23"/><path d="M3.5 146.2 L298.5 146.2 " id="Line-Copy-24"/><path d="M3.5 164.2 L298.5 164.2 " id="Line-Copy-25"/><path d="M3.5 224.2 L298.5 224.2 " id="Line-Copy-26"/><path d="M3.5 218.2 L298.5 218.2 " id="Line-Copy-27"/><path d="M3.5 212.2 L298.5 212.2 " id="Line-Copy-28"/><path d="M3.5 200.2 L298.5 200.2 " id="Line-Copy-29"/><path d="M3.5 194.2 L298.5 194.2 " id="Line-Copy-30"/><path d="M3.5 188.2 L298.5 188.2 " id="Line-Copy-31"/><path d="M3.5 182.2 L298.5 182.2 " id="Line-Copy-41"/><path d="M3.5 206.2 L298.5 206.2 " id="Line-Copy-32"/><path d="M3.5 266.2 L298.5 266.2 " id="Line-Copy-33"/><path d="M3.5 260.2 L298.5 260.2 " id="Line-Copy-34"/><path d="M3.5 272.2 L298.5 272.2 " id="Line-Copy-42"/><path d="M3.5 284.2 L298.5 284.2 " id="Line-Copy-43"/><path d="M3.5 290.2 L298.5 290.2 " id="Line-Copy-45"/><path d="M3.5 296.2 L298.5 296.2 " id="Line-Copy-95"/><path d="M3.3 278.2 L298.3 278.2 " id="Line-Copy-44"/><path d="M3.5 254.2 L298.5 254.2 " id="Line-Copy-35"/><path d="M3.5 242.2 L298.5 242.2 " id="Line-Copy-36"/><path d="M3.5 236.2 L298.5 236.2 " id="Line-Copy-37"/><path d="M3.5 230.2 L298.5 230.2 " id="Line-Copy-38"/><path d="M3.5 248.2 L298.5 248.2 " id="Line-Copy-39"/><path d="M8.2 19.5 L8.2 298.5 " id="Line"/><path d="M3.2 19.5 L3.2 298.5 " id="Line-Copy-94"/><path d="M20.2 19.5 L20.2 298.5 " id="Line-Copy-47"/><path d="M26.2 19.5 L26.2 298.5 " id="Line-Copy-48"/><path d="M14.2 19.5 L14.2 298.5 " id="Line-Copy-46"/><path d="M32.2 19.5 L32.2 298.5 " id="Line-Copy-52"/><path d="M44.2 19.5 L44.2 298.5 " id="Line-Copy-49"/><path d="M50.2 19.5 L50.2 298.5 " id="Line-Copy-50"/><path d="M38.2 19.5 L38.2 298.5 " id="Line-Copy-51"/><path d="M56.2 19.5 L56.2 298.5 " id="Line-Copy-60"/><path d="M68.2 19.5 L68.2 298.5 " id="Line-Copy-53"/><path d="M74.2 19.5 L74.2 298.5 " id="Line-Copy-54"/><path d="M62.2 19.5 L62.2 298.5 " id="Line-Copy-55"/><path d="M80.2 19.5 L80.2 298.5 " id="Line-Copy-56"/><path d="M92.2 19.5 L92.2 298.5 " id="Line-Copy-57"/><path d="M98.2 19.5 L98.2 298.5 " id="Line-Copy-58"/><path d="M86.2 19.5 L86.2 298.5 " id="Line-Copy-59"/><path d="M104.2 19.5 L104.2 298.5 " id="Line-Copy-76"/><path d="M200.2 20.5 L200.2 299.5 " id="Line-Copy-77"/><path d="M116.2 19.5 L116.2 298.5 " id="Line-Copy-61"/><path d="M212.2 20.5 L212.2 299.5 " id="Line-Copy-78"/><path d="M122.2 19.5 L122.2 298.5 " id="Line-Copy-62"/><path d="M218.2 20.5 L218.2 299.5 " id="Line-Copy-79"/><path d="M110.2 19.5 L110.2 298.5 " id="Line-Copy-63"/><path d="M206.2 20.5 L206.2 299.5 " id="Line-Copy-80"/><path d="M128.2 19.5 L128.2 298.5 " id="Line-Copy-64"/><path d="M224.2 20.5 L224.2 299.5 " id="Line-Copy-81"/><path d="M140.2 19.5 L140.2 298.5 " id="Line-Copy-65"/><path d="M236.2 20.5 L236.2 299.5 " id="Line-Copy-82"/><path d="M146.2 19.5 L146.2 298.5 " id="Line-Copy-66"/><path d="M242.2 20.5 L242.2 299.5 " id="Line-Copy-83"/><path d="M134.2 19.5 L134.2 298.5 " id="Line-Copy-67"/><path d="M230.2 20.5 L230.2 299.5 " id="Line-Copy-84"/><path d="M152.2 19.5 L152.2 298.5 " id="Line-Copy-68"/><path d="M248.2 20.5 L248.2 299.5 " id="Line-Copy-85"/><path d="M164.2 19.5 L164.2 298.5 " id="Line-Copy-69"/><path d="M260.2 20.5 L260.2 299.5 " id="Line-Copy-86"/><path d="M170.2 19.5 L170.2 298.5 " id="Line-Copy-70"/><path d="M266.2 20.5 L266.2 299.5 " id="Line-Copy-87"/><path d="M158.2 19.5 L158.2 298.5 " id="Line-Copy-71"/><path d="M254.2 20.5 L254.2 299.5 " id="Line-Copy-88"/><path d="M176.2 19.5 L176.2 298.5 " id="Line-Copy-72"/><path d="M272.2 20.5 L272.2 299.5 " id="Line-Copy-89"/><path d="M188.2 19.5 L188.2 298.5 " id="Line-Copy-73"/><path d="M284.2 20.5 L284.2 299.5 " id="Line-Copy-90"/><path d="M194.2 19.5 L194.2 298.5 " id="Line-Copy-74"/><path d="M290.2 20.5 L290.2 299.5 " id="Line-Copy-91"/><path d="M295.2 20.5 L295.2 299.5 " id="Line-Copy-93"/><path d="M182.2 19.5 L182.2 298.5 " id="Line-Copy-75"/><path d="M278.2 20.5 L278.2 299.5 " id="Line-Copy-92"/></g><rect id="vinyl" stroke="#4A4A4A" stroke-width="2" fill="#222222" x="0.8" y="150.8" width="300" height="300"/><g id="top-seam" transform="translate(2.000000, 0.000000)"><rect id="grommet-backing" stroke="#4A4A4A" stroke-width="2" fill="#FFFFFF" x="0" y="0" width="298" height="18"/><g id="grommets" transform="translate(11.000000, 4.000000)" stroke="#979797"><g id="Oval-1-+-Oval-1"><path d="M6 12 C9.3 12 12 9.3 12 6 C12 2.7 9.3 0 6 0 C2.7 0 0 2.7 0 6 C0 9.3 2.7 12 6 12 Z M6 9 C7.7 9 9 7.7 9 6 C9 4.3 7.7 3 6 3 C4.4 3 3 4.3 3 6 C3 7.7 4.3 9 6 9 Z" id="Oval-1" fill="#E6E2E2"/><circle id="Oval-1" fill="#FFFFFF" cx="6" cy="6" r="3"/></g><g id="Oval-1-Copy-+-Oval-1-Copy" transform="translate(23.000000, 0.000000)"><path d="M6.9 12.2 C10.2 12.2 12.8 9.5 12.8 6.2 C12.9 2.9 10.2 0.2 6.8 0.2 C3.5 0.2 0.8 2.9 0.8 6.2 C0.8 9.5 3.5 12.2 6.8 12.2 L6.9 12.2 Z M6.9 9.2 C8.5 9.2 9.8 7.9 9.8 6.2 C9.9 4.5 8.5 3.2 6.8 3.2 C5.2 3.2 3.8 4.5 3.8 6.2 C3.9 7.9 5.2 9.2 6.8 9.2 L6.9 9.2 Z" id="Oval-1-Copy" fill="#E6E2E2"/><circle id="Oval-1-Copy" fill="#FFFFFF" cx="6.8" cy="6.2" r="3"/></g><g id="Oval-1-Copy-2-+-Oval-1-Copy-2" transform="translate(47.000000, 0.000000)"><path d="M6.9 12.2 C10.2 12.2 12.9 9.5 12.9 6.2 C12.9 2.9 10.2 0.2 6.9 0.2 C3.6 0.2 0.9 2.9 0.9 6.2 C0.9 9.5 3.6 12.2 6.9 12.2 L6.9 12.2 Z M6.9 9.2 C8.5 9.2 9.9 7.9 9.9 6.2 C9.9 4.5 8.5 3.2 6.9 3.2 C5.2 3.2 3.9 4.5 3.9 6.2 C3.9 7.9 5.2 9.2 6.9 9.2 L6.9 9.2 Z" id="Oval-1-Copy-2" fill="#E6E2E2"/><circle id="Oval-1-Copy-2" fill="#FFFFFF" cx="6.9" cy="6.2" r="3"/></g><g id="Oval-1-Copy-3-+-Oval-1-Copy-3" transform="translate(71.000000, 0.000000)"><path d="M6.9 12.2 C10.2 12.2 12.9 9.5 12.9 6.2 C12.9 2.9 10.2 0.2 6.9 0.2 C3.6 0.2 0.9 2.9 0.9 6.2 C0.9 9.5 3.6 12.2 6.9 12.2 L6.9 12.2 Z M6.9 9.2 C8.6 9.2 9.9 7.9 9.9 6.2 C9.9 4.5 8.6 3.2 6.9 3.2 C5.3 3.2 3.9 4.5 3.9 6.2 C3.9 7.9 5.2 9.2 6.9 9.2 L6.9 9.2 Z" id="Oval-1-Copy-3" fill="#E6E2E2"/><circle id="Oval-1-Copy-3" fill="#FFFFFF" cx="6.9" cy="6.2" r="3"/></g><g id="Oval-1-Copy-4-+-Oval-1-Copy-4" transform="translate(95.000000, 0.000000)"><path d="M7 12.2 C10.3 12.2 12.9 9.5 12.9 6.2 C13 2.9 10.3 0.2 6.9 0.2 C3.6 0.2 0.9 2.9 0.9 6.2 C0.9 9.5 3.6 12.2 6.9 12.2 L7 12.2 Z M7 9.2 C8.6 9.2 9.9 7.9 9.9 6.2 C10 4.5 8.6 3.2 6.9 3.2 C5.3 3.2 3.9 4.5 3.9 6.2 C3.9 7.9 5.3 9.2 6.9 9.2 L7 9.2 Z" id="Oval-1-Copy-4" fill="#E6E2E2"/><circle id="Oval-1-Copy-4" fill="#FFFFFF" cx="6.9" cy="6.2" r="3"/></g><g id="Oval-1-Copy-5-+-Oval-1-Copy-5" transform="translate(120.000000, 0.000000)"><path d="M6 12.2 C9.3 12.2 12 9.5 12 6.2 C12 2.9 9.3 0.2 6 0.2 C2.7 0.2 0 2.9 0 6.2 C0 9.5 2.6 12.2 6 12.2 L6 12.2 Z M6 9.2 C7.6 9.2 9 7.9 9 6.2 C9 4.5 7.6 3.2 6 3.2 C4.3 3.2 3 4.5 3 6.2 C3 7.9 4.3 9.2 6 9.2 L6 9.2 Z" id="Oval-1-Copy-5" fill="#E6E2E2"/><circle id="Oval-1-Copy-5" fill="#FFFFFF" cx="6" cy="6.2" r="3"/></g><g id="Oval-1-Copy-6-+-Oval-1-Copy-6" transform="translate(144.000000, 0.000000)"><path d="M6 12.2 C9.3 12.2 12 9.5 12 6.2 C12 2.9 9.3 0.2 6 0.2 C2.7 0.2 0 2.9 0 6.2 C0 9.5 2.7 12.2 6 12.2 L6 12.2 Z M6 9.2 C7.7 9.2 9 7.9 9 6.2 C9 4.5 7.7 3.2 6 3.2 C4.4 3.2 3 4.5 3 6.2 C3 7.9 4.3 9.2 6 9.2 L6 9.2 Z" id="Oval-1-Copy-6" fill="#E6E2E2"/><circle id="Oval-1-Copy-6" fill="#FFFFFF" cx="6" cy="6.2" r="3"/></g><g id="Oval-1-Copy-7-+-Oval-1-Copy-7" transform="translate(168.000000, 0.000000)"><path d="M6 12.2 C9.4 12.2 12 9.5 12 6.2 C12.1 2.9 9.3 0.2 6 0.2 C2.7 0.2 0 2.9 0 6.2 C0 9.5 2.7 12.2 6 12.2 L6 12.2 Z M6 9.2 C7.7 9.2 9 7.9 9 6.2 C9.1 4.5 7.7 3.2 6 3.2 C4.4 3.2 3 4.5 3 6.2 C3 7.9 4.4 9.2 6 9.2 L6 9.2 Z" id="Oval-1-Copy-7" fill="#E6E2E2"/><circle id="Oval-1-Copy-7" fill="#FFFFFF" cx="6" cy="6.2" r="3"/></g><g id="Oval-1-Copy-8-+-Oval-1-Copy-8" transform="translate(192.000000, 0.000000)"><path d="M6.1 12.2 C9.4 12.2 12.1 9.5 12.1 6.2 C12.1 2.9 9.4 0.2 6.1 0.2 C2.8 0.2 0.1 2.9 0.1 6.2 C0.1 9.5 2.7 12.2 6.1 12.2 L6.1 12.2 Z M6.1 9.2 C7.7 9.2 9.1 7.9 9.1 6.2 C9.1 4.5 7.7 3.2 6.1 3.2 C4.4 3.2 3.1 4.5 3.1 6.2 C3.1 7.9 4.4 9.2 6.1 9.2 L6.1 9.2 Z" id="Oval-1-Copy-8" fill="#E6E2E2"/><circle id="Oval-1-Copy-8" fill="#FFFFFF" cx="6.1" cy="6.2" r="3"/></g><g id="Oval-1-Copy-9-+-Oval-1-Copy-9" transform="translate(216.000000, 0.000000)"><path d="M6.1 12.2 C9.4 12.2 12.1 9.5 12.1 6.2 C12.1 2.9 9.4 0.2 6.1 0.2 C2.8 0.2 0.1 2.9 0.1 6.2 C0.1 9.5 2.8 12.2 6.1 12.2 L6.1 12.2 Z M6.1 9.2 C7.8 9.2 9.1 7.9 9.1 6.2 C9.1 4.5 7.8 3.2 6.1 3.2 C4.5 3.2 3.1 4.5 3.1 6.2 C3.1 7.9 4.4 9.2 6.1 9.2 L6.1 9.2 Z" id="Oval-1-Copy-9" fill="#E6E2E2"/><circle id="Oval-1-Copy-9" fill="#FFFFFF" cx="6.1" cy="6.2" r="3"/></g><g id="Oval-1-Copy-10-+-Oval-1-Copy-10" transform="translate(240.000000, 0.000000)"><path d="M6.1 12.2 C9.5 12.2 12.1 9.5 12.1 6.2 C12.2 2.9 9.4 0.2 6.1 0.2 C2.8 0.2 0.1 2.9 0.1 6.2 C0.1 9.5 2.8 12.2 6.1 12.2 L6.1 12.2 Z M6.1 9.2 C7.8 9.2 9.1 7.9 9.1 6.2 C9.1 4.5 7.8 3.2 6.1 3.2 C4.5 3.2 3.1 4.5 3.1 6.2 C3.1 7.9 4.5 9.2 6.1 9.2 L6.1 9.2 Z" id="Oval-1-Copy-10" fill="#E6E2E2"/><circle id="Oval-1-Copy-10" fill="#FFFFFF" cx="6.1" cy="6.2" r="3"/></g><g id="Oval-1-Copy-11-+-Oval-1-Copy-11" transform="translate(264.000000, 0.000000)"><path d="M6.2 12.2 C9.5 12.2 12.2 9.5 12.2 6.2 C12.2 2.9 9.5 0.2 6.2 0.2 C2.9 0.2 0.2 2.9 0.2 6.2 C0.2 9.5 2.8 12.2 6.2 12.2 L6.2 12.2 Z M6.2 9.2 C7.8 9.2 9.2 7.9 9.2 6.2 C9.2 4.5 7.8 3.2 6.2 3.2 C4.5 3.2 3.2 4.5 3.2 6.2 C3.2 7.9 4.5 9.2 6.2 9.2 L6.2 9.2 Z" id="Oval-1-Copy-11" fill="#E6E2E2"/><circle id="Oval-1-Copy-11" fill="#FFFFFF" cx="6.2" cy="6.2" r="3"/></g></g></g><path d="M1.75 301 L299.75 301" id="Line" stroke="#4A4A4A" stroke-width="2" stroke-linecap="square"/></g></g></g></svg>
          </div>
        </div>
      </div>
      </div>
  }
});
