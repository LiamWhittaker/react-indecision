var nameVar = 'Liam';
var nameVar = 'Loki';
console.log('nameVar: ' + nameVar);

// ==================

let nameLet = 'Thor';
// let nameLet = 'Jormungandr';
console.log('nameLet: ' + nameLet);

// ==================

const nameConst = 'Freyja';
// const nameConst = 'Odin';
console.log('nameConst: ' + nameConst);

// ==================

function getPetName() {
  var petName = 'Fenrir';
  return petName;
}

getPetName();

// Block scoping

var fullName = 'Liam Whittaker';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
// var = function scoped. Let/const blockscoped