//Main Logic for the React-Calculator
var React =require("expose?React!react");

//bound to the DOM
var CalcWrap  = require('./components/gym-curtains/calcwrap.jsx');
// TODO npmRequire GSAP

React.render( <CalcWrap /> , document.getElementById('container'));