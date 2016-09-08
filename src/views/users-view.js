var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var UserView = require('./user-view');
var UserCollection = require('../collections/user-collection');

module.exports = Backbone.View.extend({

   el: '#main',

   initialize: function(){
      this.collection = new UserCollection();
      this.collection.fetch();
   },

   render: function(){
      console.log('Started rendering Users.');
      this.collection.each(function(model){

         var userView = new UserView({
            model: model
         });

         this.$el.append(userView.render().el);
      }.bind(this));
   }

});
