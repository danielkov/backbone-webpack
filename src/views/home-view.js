var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var template = require('../templates/templates').home;

module.exports = Backbone.View.extend({

   el: '#main',

   template: template,

   title: 'My Project',

   attrs: {
      framework: 'Backbone',
      bundler: 'Webpack',
      style: 'SASS',
      link: 'http://www.github.com/danielkov'
   },

   menuItems: [
      {link:'/home', name: 'Home'},
      {link:'/users', name: 'Users'}
   ],

   render: function(){
      console.log('Started rendering Home.');
      this.$el.append(this.template(this.attrs));
   }

});
