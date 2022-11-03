"use strict";

// const person = {
//   name: "Arslonbek",
//   age: 20,
//   job: "Teacher",
//   myName() {
//     console.log(`My name is ${this.name}`);
//   },
// }; // H[0001]

// const person2 = { ...person }; // H[0002]
// person2.name = "Abdulloh";

// person.myName(); // My name is Abdulloh
// person2.myName(); // My name is Abdulloh

const user = {
  name: "arslonbek",
  age: 20,
  job: "Teacher",
  address: {
    state: "UZB",
    city: "Tashkent",
    streets: [{ set: { age: [] } }, {}, {}],
  },
}; // H[0001]

const user1 = { ...user }; // H[0002]

user1.name = "Boburbek"; // H[0002].name = "Arslonbek"
user1.address = { ...user.address };
user1.address.state = "RUS";
user1.address.street = { ...user.address.street };

console.log(user.name); // "Arslonbek"
console.log(user1.name); // "Boburbek"

console.log(user.address.state); // "UZB"
console.log(user1.address.state); // "RUS"
