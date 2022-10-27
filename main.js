"use strict";

// HOF

let numbers = [1, 2, 3, 4, 5];

let numbers2 = pow(numbers); // [1, 4, 9, 16, 25];

console.log("numbers = ", numbers);
console.log("numbers2 = ", numbers2);

function pow(numbers = []) {
  let temp = [];
  for (let idx = 0; idx < numbers.length; idx++) {
    temp.push(numbers[idx] ** 2);
  }
  return temp;
}
