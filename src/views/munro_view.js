const PubSub = require('../helpers/pub_sub.js');

const MunroView = function (container, munro){
  this.container = container;
  this.munro = munro;
};

MunroView.prototype.render = function () {
 const munroContainer = this.container;

 const name = this.createMunroHeader();
 munroContainer.appendChild(name);
};


MunroView.prototype.createMunroHeader = function () {
  const name = document.createElement('h2');
  name.textContent = this.munro.name;
  return name;
};

module.exports = MunroView;
