var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var LayoutView = require('../views/layout-view');

module.exports = Backbone.Router.extend({

   initialize: function(){
      this.layoutView = new LayoutView();
      this.layoutView.render();
      this.layoutView.header.render();
   },

   routes: {
      '': 'homeRoute',
      'users': 'usersRoute',
      '*notFound': 'notFound'
   },

   homeRoute: function(){
      console.log('Home requested')
      if(this.currentView){
         this.currentView.remove();
      }
      this.currentView = this.layoutView.home;
      this.currentView.render();
   },

   usersRoute: function(){
      console.log('Users requested')
      if(this.currentView){
         this.currentView.remove();
      }
      this.currentView = this.layoutView.usersView;
      this.currentView.render();
   },

   notFound: function(){
      console.log('404 requested')
      if(this.currentView){
         this.currentView.remove();
      }
      this.currentView = this.layoutView.notfound;
      this.currentView.render();
   }

});
