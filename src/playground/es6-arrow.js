function squared(number){
  return number * number;
}
console.log(squared(12));

const sqrd = (number) => {
  return number * number
}
console.log(sqrd(12));

// implicit return
const sqrdNew = (number) => number * number;
console.log(sqrdNew(4))


// Challenge
const firstName = (name) => {
  return name.split(' ')[0];
}
console.log(firstName('Liam Whittaker'));

const firstArrow = (name) => name.split(' ')[0];
console.log(firstArrow('Thor Ragnarok'))

//e15