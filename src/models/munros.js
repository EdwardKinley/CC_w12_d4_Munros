const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Munros = function () {
  this.munros = [];
};

Munros.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://munroapi.herokuapp.com/api/munros');
  requestHelper.get((data) => {
    this.munros = data;
    PubSub.publish('Munros:data-ready', this.munros);
    console.log(this.munros);
  });
};

module.exports = Munros;
