"use strict";

const imgUpload1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("uploaded imgURL-1"), 1000);
});

const imgUpload2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("uploaded imgURL-2"), 2000);
});

const imgUpload3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("uploaded imgURL-3"), 3000);
});

const imagesPromises = Promise.all([imgUpload1, imgUpload2, imgUpload3]);

imagesPromises.then((imgUrls) => {
  console.log("imgUrls = ", imgUrls);
});
