var _ = require('underscore');

var layout = require('./layout.html');
var userTemplate = require('./user-template.html');
var homeTemplate = require('./home-template.html');
var headerTemplate = require('./header-template.html');
var notfoundTemplate = require('./notfound-template.html');

module.exports = {
   layout: _.template(layout),
   user: _.template(userTemplate),
   home: _.template(homeTemplate),
   header: _.template(headerTemplate),
   notfound: _.template(notfoundTemplate)
}
