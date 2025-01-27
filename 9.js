//1

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

console.log(myFriends.slice(false, num));
myFriends.length = num;
console.log(myFriends);


//2

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.pop();
friends.shift();

console.log(friends);


//3

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = finalArr.concat(arrTwo.pop(), arrOne.reverse(), arrTwo.reverse());

console.log(finalArr);  // ["Z", "X", "D", "C", "B", "A"]


//4

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase());


//5

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

haystack.map((ele) => {
    if (ele == needle)
        console.log("Found");
});

haystack.includes(needle) ? console.log("Found") : "";

haystack.indexOf(needle) ? console.log("Found") : "";

haystack.lastIndexOf(needle) ? console.log("Found") : "";

//6

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs.concat(arr2.pop(), arr1.pop(), arr2.pop()).reverse().join("").toLowerCase();

console.log(allArrs);