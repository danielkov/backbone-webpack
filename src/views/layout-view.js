var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var UsersView = require('./users-view');
var HomeView = require('./home-view');
var HeaderView = require('./header-view');
var NotFoundView = require('./notfound-view');
var template = require('../templates/templates').layout;

module.exports = Backbone.View.extend({

   el: 'body',

   template: template,

   initialize: function(){
      this.header = new HeaderView();
      this.usersView = new UsersView();
      this.home = new HomeView();
      this.notfound = new NotFoundView();
   },

   render: function(){
      console.log('started rendering layout');
      this.$el.prepend(this.template());
   }

});
