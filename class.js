"use strict";

// function Person(name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// }

// Person.prototype.run = function run() {
//   console.log(`${this.name} is running...🏃‍♂️`);
// };

// Person.prototype.eat = function eat() {
//   console.log(`${this.name} is eating... 🍽️`);
// };

// class Father {
//   constructor(fatherBirthYear) {
//     this.fatherBirthYear = fatherBirthYear;
//   }

// }

class Person {
  constructor(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }

  run() {
    console.log(`${this.name} is running...🏃‍♂️`);
  }

  eat() {
    console.log(`${this.name} is eating... 🍽️`);
  }
}

const person = new Person("Arslonbek", 2001);

console.log(person);
person.run();
person.eat();
