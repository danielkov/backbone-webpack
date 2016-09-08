var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var User = require('../models/user');

var userTemplate = require('../templates/templates').user;

module.exports = Backbone.View.extend({

   template: userTemplate,

   tagName: 'article',

   className: 'post-list-item',

   render: function(){
      this.$el.append(this.template(this.model.toJSON()));
      return this;
   }

});
