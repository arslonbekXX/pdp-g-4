"use strict";

// String.prototype.newRepeat = function newRepeat(count) {
//   let temp = "";
//   for (let i = 0; i < 2 * count; i++) {
//     temp += this + "-";
//   }
//   return temp;
// };

// /**
//  *  ✅ prototype -> functions
//  *  ✅ __proto__ -> all
//  */

// function Box(name) {
//   this.name = name;
// }

// Box.prototype.show = function show() {
//   console.log(`I am ${this.name.toUpperCase()}`);
// };

// Box.prototype.run = function run() {
//   console.log(`${this.name} is running...`);
// };

// const box = new Box(`Box`);
// const box2 = new Box(`Box-Two`);

// box.show();
// box2.show();

// const txt = "arslonbek";
// console.log(txt.newRepeat(2));

// const text = "Arslonbek"; // new String("Arslonbek")
// const isBig = true; // new Boolean()
// const isSuccess = false; // new Boolean()
// const fun = () => {}; // new Function()
// const person = new Person("Arslonbek", 2001);

// console.log(text.__proto__ === String.prototype); // String.prototype
// console.log(isBig.__proto__ === Boolean.prototype); // Boolean.prototype
// console.log(fun.__proto__ === Function.prototype); // Function.prototype
// console.log(person.__proto__ === Person.prototype); // Person.prototype

// console.log(Boolean.prototype === isBig.__proto__);
// console.log(Boolean.prototype === isSuccess.__proto__);
// console.log(Boolean.prototype.__proto__ === Object.prototype);

// function Person(name, birthYear) {
//   this.name = name;
//   this.birthYear = birthYear;
// }

// Person.prototype.run = function run() {
//   console.log(`${this.name} is running`);
// };

// Person.prototype.eat = function eat() {
//   console.log(`${this.name} is eating`);
// };

// const person = new Person();

// const _eat = new person.eat();

// console.log(Person.prototype.eat.prototype === _eat.__proto__);
// console.log(Person.prototype.eat.prototype.__proto__ === Object.prototype);

let counter = 0;
function Box(name) {
  let temp = ++counter;
  this.name = name;

  // this.run = function () {
  //   console.log(`temp = ${temp}: ${this.name} is running...`);
  // };

  // this.jump = function () {
  //   console.log(`temp = ${temp}: ${this.name} is jumping...`);
  // };
}

Box.prototype.run = function () {
  console.log(`${this.name} is running...`);
};

Box.prototype.jump = function () {
  console.log(`${this.name} is jumping...`);
};

for (let i = 0; i < 100; i++) {
  const box = new Box(`Box-${i}`);
  box.run();
}
