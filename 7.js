//1

let num = 9;

if (num <= 9) {
    console.log(`00${num}`);
}

num = 20;

if (num > 9 && num < 100) {
    console.log(`0${num}`);
}

num = 120;

if (num >= 100) {
    console.log(`${num}`);
}

//2

let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
    console.log(`{num1} Is The Same Value As {str}`);
}

if (num1 !== str) {
    console.log(`{num1} Is The Same Value As {str} But Not The Same Type`);
}

if (num1 !== str2) {
    console.log(`{num1} Is Not The Same Value Or The Same Type As {str2}`);
}

if (str != str2 && typeof str == typeof str2) {
    console.log(`{str} Is The Same Type As {str2} But Not The Same Value`);
}



//3

let num01 = 10;
let num2 = 30;
let num3 = "30";

if (num3 > num01 && num3 !== num2) {
    console.log(`30 Is Larger Than 10 And Type string Not The Same Type As number`);
}
if (num3 > num01 && num3 == num2 && num3 !== num2) {
    console.log(`30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number`);
}
if (num3 !== num01 && num2 !== num3) {
    console.log(`{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}`);
}



//4

// Edit What You Want Here

let num001 = 11;
let num02 = 10;
let num03 = 11;
let num4 = 33;

/*
    Do Not Edit Below This Line
    Needed Output
    True 7 Times
*/

// Condition 1

if (num001 > num02) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 2

if (num001 > num02 && num001 < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 3

if (num001 > num02 && num001 === num03) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 4

if ((num001 + num02) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 5

if ((num001 + num03) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 6

if ((num001 + num02 + num03) < num4) {
    console.log("True");
} else {
    console.log("False");
}

// Condition 7

if (num4 - (num001 + num03) + num02 === 21) {
    console.log("True");
} else {
    console.log("False");
}