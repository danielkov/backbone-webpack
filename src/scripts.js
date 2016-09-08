var Backbone = require('backbone');
var Router = require('./routes/router');

var styles = require('./styles/base.sass');

var app = new Router();

Backbone.history.start({pushState:false});
