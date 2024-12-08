// singleton

const tinderUser = new Object();

tinderUser.id = "123abc";

tinderUser.name = "soumen";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "xyz@gmail.com",
  fullname: {
    userfullname: {
      firstname: "soumen",
      lastname: "mallick",
    },
  },
};
// console.log(regularUser);

// combine two objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "c" };
const obj3 = Object.assign({}, obj1, obj2);
// or

const obj4 = { ...obj1, ...obj2 };

console.log(obj3);
console.log(obj4);
