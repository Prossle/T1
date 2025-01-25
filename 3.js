//1

console.log(10 * 20 * 15 * 3 * 190 % 10 * 400);

//2

let num = 3;


console.log(num + num);
console.log(num * (num-true));
console.log(num << true);
console.log(num << num/num);
console.log(num << true + false);
console.log(num << true + true >> true);

//3

let num1 = "10";

console.log(+num1+(+num1));
console.log(Number(num1) + Number(num1));
console.log(parseInt(num1)+parseInt(num1));
console.log(parseInt(num1) * (true+true));
console.log(parseInt(num1) * (num1 >> (true + true)));

//4

let points = 10;

points += ((true << true) + true);

console.log(points);

points = (points >> (((true << true) + true))) << ((true << true) + true);

console.log(points);