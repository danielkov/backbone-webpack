var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

   defaults: {
      username: '',
      email: ''
   }

});
