var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var template = require('../templates/templates').header;

module.exports = Backbone.View.extend({

   el: '#header',

   template: template,

   title: 'My Project',

   menuItems: [
      {link:'#', name: 'Home'},
      {link:'#/users', name: 'Users'}
   ],

   render: function(){
      console.log('Started rendering Header.');
      var attrs = {};
      attrs.menuItems = this.menuItems;
      attrs.title = this.title;
      this.$el.append(this.template(attrs));
   }

});
