const Heros = ["soumen", "sonai", "don"];
const Cros = ["Anupam", "Sudipan", "somu"];

// This type of array merge is not recomended
// Heros.push(Cros);
// console.log(Heros);

// Concat returns a new array
const newArr = Heros.concat(Cros);
console.log(newArr);

// Another metghod to join two or more arrays
const newArr2 = [...Heros, ...Cros];
console.log(newArr2);
