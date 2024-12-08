// function chai() {
//   console.log(`DB Connected`);
// }
// chai();

// Insted of this we can write this
// This is called named IIFE
(function chai() {
  console.log(`DB Connected`);
})();

// in case of arrow function
(() => {
  console.log(`DB Connected, Soumen`);
})();
