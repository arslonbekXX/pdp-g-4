"use strict";

// HOF
// currying
const summa = (a) => (b) => (c) => (d) => a + b + c + d;

const result = summa(10)(20)(30)(40); // 100

console.log(result);

app.get("/user", [auth, admin], (req, res) => {});
