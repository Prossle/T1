//1

console.log(100_000);
console.log(5e4 + 5e4);
console.log(100000);
console.log(1e5);
console.log(1000_00);
console.log(2e4 + 8e4);
console.log(50000+50000);
console.log(20000+80000);
console.log(50000 << 1);
console.log(50_000 * 2);
console.log(50_000 << 1);
console.log(25_000 << 2);
console.log(25_000 * 4);


//2

console.log(-Number.MIN_SAFE_INTEGER);

//3

console.log((Number.MAX_SAFE_INTEGER).toString().length);

//4

let myVar = "100.56789 Views";

console.log(parseInt(myVar));
console.log(Number(parseFloat(myVar).toFixed(2)));

//5

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num));

//6

let flt = 10.6;

console.log(parseInt(flt));
console.log(Math.floor(flt));
console.log(Math.trunc(flt));
console.log(Math.round(flt) - true);
console.log(Math.ceil(flt) - true);

//7

console.log(parseInt(Math.random() * 10 % 5));