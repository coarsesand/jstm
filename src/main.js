// Sews together the jstm application.
var slate   = require('./slate');
var util    = require('./util');
var manager = require('./manager');

var layouts = {
	vertMaster: require('layouts/vertMaster.js')
};

function init() {
	manager.setup();
}

exports.layouts = layouts;
exports.percent = util.percent;
