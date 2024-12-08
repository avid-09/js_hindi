const name = "Soumen";
const repoCount = 50;

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

// console.log(name[0]);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(2));
// console.log(name.indexOf("e"));

const NewName = "     sdsdsddd     mallick   ";

console.log(NewName);
// remove all unwanted spase
console.log(NewName.trim()); //remove spaces from the start and trhe end
console.log(NewName.trimStart()); //remove spaces from the start
console.log(NewName.trimEnd()); //remove spaces from the end

// NewName.replace("d", "-");
console.log(NewName.replace("d", "-")); //find 1st occurance of 'd' and replace it by '-'

// Find something
console.log(NewName.includes("ic")); // return boolean value

// Splits string into an array on the basis of any Keywords
const I = "soumen mallick mondal";
console.log(I.split(" "));
