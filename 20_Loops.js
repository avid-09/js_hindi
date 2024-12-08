// ************************************************************************************
// // For of Loop

// const arr = [1, 2, 3, 4, 5, { name: "Soumen", age: 12 }];
// for (const i of arr) {
//   console.log(i);
// }

// maps in js

// map.set("soumen", 1);
// const map = new Map();
// map.set("anupam", 2);
// map.set("sonai", 3);
// // console.log(map);

// for (const [key, value] of map) {
//   console.log(key, "=>", value);
// }

// ************************************************************************************
//
// For in loop
// it is mainly for object

// const myobj = {
//   js: "javascript",
//   cpp: "c++",
//   rb: "Ruby",
//   swift: "swift by apple",
// };

// for (const key in myobj) {
//   console.log(`${key} : ${myobj[key]}`);
// }

// const arr1 = [10, 11, 12, 13];

// for (const key in arr1) {
//   console.log(arr1[key]);
// }

// ************************************************************************************

// For each loop

// const coding = ["js", "ryby", "c++", "python"];

// coding.forEach(function (val) {
//   console.log(val);
// });

// arrow Function
// coding.forEach((val) => {
//   console.log(val);
// });

// Accessing the object through Foreach loop
const mycoding = [
  {
    languagename: "c++",
    fileName: "cpp",
  },
  {
    languagename: "javascript",
    fileName: "js",
  },
];

mycoding.forEach((item) => {
  console.log(item.languagename);
});
