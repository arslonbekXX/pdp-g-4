"use strict";
// function calc(a, b) {
//   return a + b;
// }
// const summa = calc(10, 20);
// console.log("summa = ", summa);

// const myAge = 20;
// const isBig = myAge > 30 ? true : false;

// const person = {
//   name: "arslonbek",
//   age: 20,
//   job: "Teacher",
//   eat() {
//     console.log(`${this.name} is eating...`);
//   },
// };

// const eat = person.eat;
// eat();

// function app(a, b) {
//   console.log({ a, b });
//   console.log(`${this.name} is eating...`);
// }

// app.apply(person, [20, 30]);
// app.call(person, 20, 30);
// const newApp = app.bind(person);
// newApp(20, 30);

// class App extends React.Component {
//   constructor() {
//     this.onClick = this.onClick.bind(this);
//   }

//   onClick() {}

//   render() {
//     return React.createElement("div", { onClick: this.onClick });
//   }
// }

// const person = {
//   age: 20,
//   data: {
//     name: "123",
//   },
// };

// const person1 = { ...person };

// person1.age = null;
// person1.data = { ...person.data, name: "444" };

// console.log(person1);
// console.log(person);
// NaN = not a number
// const a = NaN;
// const b = NaN;
// console.log(NaN === NaN);
// console.log(Number.isNaN(a));
// const squareObj = new Square(10);
// console.log(squareObj.area);

// class Square {
//   constructor(length) {
//     this.length = length;
//   }

//   get area() {
//     return this.length * this.length;
//   }

//   set area(value) {
//     this.area = value;
//   }
// }

// console.log(new Number(0));

// getMessage();

// const getMessage = () => {
//   console.log("Good morning");
// };

// console.log("First line");
// ["a", "b", "c"].forEach((element) => console.log(element));
// console.log("Third line");

// function f() {
//   return;
//   {
//     age: 20;
//   }
// }

// const test = f();

// console.log(test);
// var array1 = new Array(3);
// console.log(array1);

// var array2 = [];
// array2[2] = 100;
// console.log(array2);

// var array3 = [, , ,];
// console.log(array3);

const person = {
  name: "arslonbek",
  ["age" + 20]: 20,
};

console.log(person.age20);
