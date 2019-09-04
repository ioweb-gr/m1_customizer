/*
 * Copyright (c) 2018. IOWEB TECHNOLOGIES
 */

require('../scss/ioweb-custom.scss');
import $ from 'jquery';
var WebFont = require('webfontloader');

require('./io-touchfix');

console.log('Loading app');
console.log(WebFont);

WebFont.load({
    google: {
        families: ['Roboto:400,700:latin,greek', 'Open Sans:400,700:latin,greek', 'Poppins:400,700:latin,greek']
    }
});



$(window).on('load', function () {
    console.log('loaded');
});