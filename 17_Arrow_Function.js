const User = {
  userName: "Soumen",
  price: 999,
  WecomeMessege: function () {
    console.log(`${this.userName}, Welcome to the Website`);
    // console.log(this);
  },
};

// User.WecomeMessege();
// User.userName = "Sonai";
// User.WecomeMessege();

// console.log(this);

// function chai() {
//   console.log(this);
// }
// chai();

// const chai = () => {
//   let userName = "Soumen";
//   console.log(this);
// };

// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// or
// const addTwo = (num1, num2) => num1 + num2;
// or
// const addTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(10, 3));
