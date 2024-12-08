const accountId = 144553;
let accountEmail = "soumen@Gmail.com";

// Prefer not to use var
var accountPassword = "12345";

// If we do not initialize a variable then it is undefined by default
let accountState;

// compile, but do not recomended
accountCity = "Bankura";

console.log(accountId, accountEmail);

// given output in a tabuler format
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
