var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var template = require('../templates/templates').notfound;

module.exports = Backbone.View.extend({

   el: '#main',

   template: template,

   title: 'My Project',

   render: function(){
      console.log('Started rendering 404.');
      this.$el.append(this.template());
   }

});
