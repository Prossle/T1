//1

console.log(100 == "100");
console.log(100 < 1000);
console.log(110 > 100 && 10 < 20);
console.log(-10 == "-10");
console.log(!(-50 == "-40"));
console.log(!(10 == "-40"));
console.log(!("10" > 10));
console.log(!(20 && false));

//2

let num1 = 10;
let num2 = 20;

console.log(Boolean(num1 && num2));
console.log(Boolean(num1 || num2));
console.log(num1 != num2);
console.log(!(num1 == num2));
console.log(!(num1 > num2));
console.log(num1 < num2);

//3

let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a > b);
console.log(a > b || a > c);
console.log(!(a == b) && !(a > b) && !(a == c) && !(a < c));