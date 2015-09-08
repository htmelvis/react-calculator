//Main Logic for the React-Calculator
var React = require('react');
var $ = require('jquery');
var _ = require('lodash');
//bound to the DOM
var Calculator = require('./components/Calculator');

React.render(<Calculator calcTitle="Order Calculator" titleBgColor="red" />, document.getElementById('calc'));