//1

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let arr = mix.map((ele) => {
    return isNaN(ele) ? ele : "";
}).reduce((acc, current) => {
    return acc + current;
});

console.log(arr);


//2

let myString = "EElllzzzzzzzeroo";

myString = myString.split("").filter((ele,index) => {
    return myString.indexOf(ele) == index;
}).join("");

console.log(myString);


//3

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let arr1 = myArray.reduce((acc, current) => {
    return acc + current;
}).split(",").reduce((ac,cr)=>ac+cr);

console.log(arr1);


//4

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let arr2 = numsAndStrings.filter((ele) => !isNaN(ele)).map((ele) => -ele);

console.log(arr2);


//5

let nums = [2, 12, 11, 5, 10, 1, 99];

let num = nums.reduce((acc, current) => {
    current % 2 == 0 ? acc *= current : acc += current;
    return acc;
}, 1);

console.log(num);