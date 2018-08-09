const PubSub = require('../helpers/pub_sub.js');
const MunroView = require('./munro_view.js');

const MunroListView = function (container) {
  this.container = container;
}

MunroListView.prototype.bindEvents = function () {
  PubSub.subscribe('Munros:data-ready', (evt) => {
    this.munros = evt.detail;
    this.displayDropdown(this.munros);
    this.render(this.munros);
  });

  document.querySelector('#dropdown').addEventListener('change', (evt) => {
      this.container.innerHTML = '';
      const selectedRegion = evt.target.value;
      var munrosOfRegion = this.filterMunros(selectedRegion);
      this.render(munrosOfRegion);
      console.log(munrosOfRegion.length);
  })
};

MunroListView.prototype.displayDropdown = function(munros) {
  var regions = munros.map(munro => munro.region);
  var uniqueRegions = Array.from(new Set(regions));
  var dropdown = document.querySelector("#dropdown")

  uniqueRegions.forEach((uniqueRegion, index) => {
    const option = document.createElement('option');
    option.textContent = `${uniqueRegion} (${this.filterMunros(uniqueRegion).length})`;
    option.value = uniqueRegion;
    dropdown.appendChild(option);
  });

};

MunroListView.prototype.render = function (data) {
  data.forEach((munro) => {
    const munroView = new MunroView(this.container, munro);
    munroView.render();
  });
};

MunroListView.prototype.filterMunros = function (region) {
  return this.munros.filter(munro => munro.region === region);
};

module.exports = MunroListView;
