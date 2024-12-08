// Filter Function============================================>

// const coding = ["js", "ryby", "c++", "python"];

// coding.forEach((item) => {
//   console.log(item);
// });

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const ans = myNums.filter((nums) => nums > 4);

// or
// const ans = myNums.filter((nums) => {
//   return nums > 4;
// });

// console.log(ans);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
//   { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
// ];

// let userBooks = books.filter((bk) => {
//   return bk.genre === "History";
// });

// let userBooks = books.filter((bk) => {
//   return bk.genre === "History" && bk.publish >= 1995;
// });

// console.log(userBooks);

// map method=================================================================================>
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const ans = myNumbers.map((num) => {
//   return num + 10;
// });

// const ans = myNumbers
//   .map((num) => {
//     return num + 10;
//   })
//   .map((num) => {
//     return num * 100;
//   })
//   .filter((num) => {
//     return num > 1300;
//   });

// console.log(ans);

// Reduce function=======================================================================>

// const myNums = [1, 2, 3];

// const ans = myNums.reduce((acc, currval) => {
//   console.log(`acc:${acc} ans currval:${currval}`);
//   return acc + currval;
// }, 0);

// console.log(ans);

// const shoppingcart = [
//   {
//     itemName: "js course",
//     price: 2999,
//   },
//   {
//     itemName: "py course",
//     price: 999,
//   },
//   {
//     itemName: "mobile dev course",
//     price: 5999,
//   },
//   {
//     itemName: "data science course",
//     price: 12999,
//   },
// ];

// const sum = shoppingcart.reduce((acc, currval) => {
//   return acc + currval.price;
// }, 0);

// console.log(sum);
