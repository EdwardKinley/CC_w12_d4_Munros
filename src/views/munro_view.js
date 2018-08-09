const PubSub = require('../helpers/pub_sub.js');

const MunroView = function (container, munro){
  this.container = container;
  this.munro = munro;
};

MunroView.prototype.render = function () {
 const munroContainer = this.container;

 const name = this.createMunroHeader();
 munroContainer.appendChild(name);
 const statList = this.createStatList();
 munroContainer.appendChild(statList);
};


MunroView.prototype.createMunroHeader = function () {
  const name = document.createElement('h2');
  name.textContent = this.munro.name;
  return name;
};

MunroView.prototype.createStatList = function () {
  const statList = document.createElement('ul');
  const meaning = document.createElement('li');
  const height = document.createElement('li');
  meaning.textContent = `Meaning: ${this.munro.meaning}`;
  height.textContent = `Height: ${this.munro.height}m`;
  statList.appendChild(meaning);
  statList.appendChild(height);
  return statList;
};

module.exports = MunroView;
