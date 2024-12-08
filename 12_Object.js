// singleton
// Object literals

// literals
const mySym = Symbol("key1");

const JsUser = {
  name: "soumen",
  age: 22,
  [mySym]: "mykey1",
  location: "bankura",
  email: "xyz@gmail.com",
  isLoggedIn: false,
};

// Print
// console.log(JsUser.name);

// or

// console.log(JsUser["name"]);
// console.log(JsUser);

// To freez some object
// After thet there is no option to change any element
// Object.freeze(JsUser);

JsUser.greeting = function () {
  console.log("Hello js user");
};
JsUser.greetingTwo = function () {
  console.log(`Hello js user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
