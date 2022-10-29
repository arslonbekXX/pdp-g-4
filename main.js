"use strict";

// const isExistSalary = false;

// const getPhone = new Promise(function (resolve, reject) {
//   if (isExistSalary) {
//     const phone = {
//       brand: "Apple",
//       color: "Green",
//       name: "IPhone 11 Pro Max",
//     };

//     resolve(phone);
//   } else {
//     const message = "Uzr, oylikni kechroq berishar ekan";
//     reject(new Error(message)); // {message: "Uzr, oylikni kechroq berishar ekan"}
//   }
// });

// // const maqtanish = new Promise((resolve, reject) => {
// //   getPhone
// //     .then((phone) => {
// //       const message = `Man ${phone.name} oldim 😎`;
// //       resolve(message);
// //     })
// //     .catch((err) => {
// //       const message = "Qomapti 😢";
// //       reject(new Error(message));
// //     });

// //   console.log("test");
// // });

// // maqtanish.then((message) => console.log(message)).catch((err) => console.log(err.message));

// const maqtanish = (phone) => Promise.resolve(`Man ${phone.name} oldim 😎`);

// getPhone
//   .then((phone) => maqtanish(phone)
//   .then((message) => console.log(message)))
//   .catch((err) => console.log(err.message));

// const add = (a, b) => {
//   const summa = a + b;
//   return summa;
// };

// const addAPI = (a, b) => {
//   const summa = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });

//   return summa;
// };

// const result = add(10, 20);
// console.log("result = ", result); // result = 30

// addAPI(10, 20).then((result) => {
//   console.log("result = ", result); // result = 30
// });
