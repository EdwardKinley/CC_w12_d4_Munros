const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunroListView = function (container) {
  this.container = container;
}

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-ready', (evt) => {
    this.munros = evt.detail;
    this.displayDropdown(this.munros);
    this.render();
  });
};

MunroListView.prototype.displayDropdown = function(munros) {
  var regions = munros.map(munro => munro.region);
  var uniqueRegions = Array.from(new Set(regions));
  var dropdown = this.container.appendChild(document.createElement('select'));
  uniqueRegions.forEach((uniqueRegion, index) => {
    const option = document.createElement('option');
    option.textContent = uniqueRegion;
    option.value = index;
    dropdown.appendChild(option);
  });
};

MunroListView.prototype.render = function () {
  this.munros.forEach((munro) => {
    const munroView = new MunroView(this.container, munro);
    munroView.render();
  });
};

module.exports = MunroListView;
