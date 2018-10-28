'use strict';

// arguments object no longer bound in arrow funcs

var add = function add(a, b) {
  // console.log(arguments);   <-----
  return a + b;
};
console.log(add(55, 1));

// 'this' no longer bound either
var user = {
  name: 'Liam',
  cities: ['Knutsford', 'Manchester', 'Sevilla'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
  }
};
console.log(user.printPlacesLived());

// Challenge

var multiplier = {
  numbers: [2, 3, 4],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (x) {
      return x * _this2.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());
