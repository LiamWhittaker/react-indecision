class Person {
  constructor(name = 'Anonymous', age = 0) { // function default
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old!`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if(this.hasMajor()) {
      description += ` Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    if(this.homeLocation) {
      return `Hi, I'm ${this.name}, I'm visiting from ${this.homeLocation}`
    }
    return super.getGreeting();
  }
}

const me = new Traveller('Odin', 29, 'Asgaard');
const you = new Student('Thor');
const them = new Student();
console.log(me);
console.log(you);
console.log(them);

// me.getGreeting();
console.log(me.getGreeting());
// me.hasMajor();