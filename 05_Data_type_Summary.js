// Primitive
// All primitive datatypes are call by value type

// 7 type
// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

// Non-primitive
// All Non-primitive datatypes are call by reference type
// Array
// Object
// Function

const id = Symbol("123");
const another = Symbol("123");
console.log(id == another);
console.log(id);
console.log(another);
