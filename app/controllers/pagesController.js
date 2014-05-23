var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Locomotive2';
  this.render();
}

module.exports = pagesController;
