//Main Logic for the React-Calculator
var React = require('react');
//bound to the DOM
var Calculator = require('./components/Calculator');

React.render(<Calculator calcTitle="Order Calculator" titleBgColor="red" dataFile="mosquito" />, document.getElementById('calc'));