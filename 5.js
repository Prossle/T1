//1

let userName = "Elzero";

console.log(userName.at(0).toLowerCase());
console.log(userName.charAt(0).toLowerCase());
console.log(userName[0].toLowerCase());
console.log(userName.at(3));
console.log(userName.charAt(3));
console.log(userName[3].repeat(3));

//2

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ));
console.log(word.startsWith(letterE.toUpperCase()));
console.log(word.endsWith(letterO.toLowerCase()));