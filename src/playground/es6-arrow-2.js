// arguments object no longer bound in arrow funcs

const add = (a, b) => {
  // console.log(arguments);   <-----
  return a + b;
}
console.log(add(55, 1));


// 'this' no longer bound either
const user = {
  name: 'Liam',
  cities: ['Knutsford', 'Manchester', 'Sevilla'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city );
  }
}
console.log(user.printPlacesLived());

// Challenge

const multiplier = {
  numbers: [2, 3, 4],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((x) =>  x * this.multiplyBy);
  }
}
console.log(multiplier.multiply());