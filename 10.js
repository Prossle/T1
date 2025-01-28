//1


let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += 10){
    if (i == exclude)
        continue;
    console.log(i);
}



//2


let start1 = 10;
let end1 = 0;
let stop1 = 3;

for (let i = start1; i >= end1; i--){
    if (i >= start1)
        console.log(`${i}`);
    else if (i < start1)
        console.log(`0${i}`);
    if (i == stop1)
        break;
}



//3


let start2 = 1;
let end2 = 6;
let breaker = 2;

for (let i = start2; i <= end2; i++){
    console.log(i);
    console.log(`-- ${breaker}`);
    console.log(`-- ${end2 - breaker}`);
}



//4


let index = 10;
let jump = 2;

for (; ;){
    console.log(index);
    index -= jump;
    if (index == jump)
        break;
}



//5


let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let c = letter.length;
for (let i = letter.length-letter.length; i < friends.length; i++){
    if (friends[i].startsWith(letter.toUpperCase()))
        continue;
    console.log(`${c} => ${friends[i]}`);
    c++;
}



//6


let start01 = 0;
let swappedName = "elZerO";
let arr = swappedName.split("");

for (let i = start01; i < arr.length; i++){
    if (arr[i].toLowerCase() == arr[i])
        arr[i] = arr[i].toUpperCase();
    else
        arr[i] = arr[i].toLowerCase();
}

swappedName = arr.join("");
console.log(swappedName);



//7


let start001 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start001; i < mix.length; i++){
    if (!isNaN(mix[i]) && mix[i] != true)
        console.log(mix[i]);
}