"use strict";

console.log(1);
setTimeout(function () {
  console.log(2);
}, 0);

setTimeout(function () {
  console.log(3);
}, 0);
Promise.resolve(4).then(function () {
  console.log(4);
});
Promise.resolve(5).then(function () {
  setTimeout(function () {
    console.log(5);
  }, 0);
});
setTimeout(function () {
  Promise.resolve(6).then(function () {
    console.log(6);
  });
}, 0);
console.log(7);

/**
 * NEW : 1,7,4,2,3,6,5
 *
 * Ilyos: 1,7,2,3,4,5,6
 * Baxtiyor:
 * Jamshidbek: 1,7,4,2,3,6,5
 * Group: 1,7,4,2,3,5,6
 * Correct: 1,7,4,2,3,6,5
 *
 *
 *
 */
