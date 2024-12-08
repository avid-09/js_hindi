// const score = 400;
// console.log(score);

// // Strictly define a number that is a 'Number' type
// const balance = new Number(100);
// console.log(balance);

// // convert number into string
// console.log(balance.toString());
// console.log(balance.toString().length);

// +++++++++++++++++++++++++++++  Maths  ++++++++++++++++++++++++++++++++++++++++
console.log(Math);
const a = -4;

// For abs function
console.log(Math.abs(a));

// For round off the value
console.log(Math.round(12.5));

// Round off to the upper value
console.log(Math.ceil(12.4));

// Round off to the lower value
console.log(Math.floor(12.5));

// Sqrt function
console.log(Math.sqrt(25));

// MInimum and Maximum value

console.log(Math.min(4, 5, 8, 10));
console.log(Math.max(4, 5, 8, 10));

// Random Number
// output number is lie between 0 and 1
console.log(Math.random());

// Outpt number is start from 1 and upto infinity
console.log(Math.random() * 10 + 1);

// If we want to between a range
const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
