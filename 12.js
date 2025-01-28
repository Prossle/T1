//1


function sayHello(theName, theGender) {
    console.log(`Hello${theGender == " Male" ? "Mr" : theGender == " Female" ? "Miss" : ""} ${theName}`);
}

sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"



//2


function calculate(firstNum, secondNum="", operation) {
    if (secondNum == "")
        console.log(`Second Number Not Found`);
    else {
        switch (operation) {
            default:
                console.log(firstNum + secondNum);
                break;
            case "subtract":
                console.log(firstNum - secondNum);
                break;
            case "multiply":
                console.log(firstNum * secondNum);
                break;
        }
    }
}

calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600




//3


function ageInTime(theAge) {
    if (theAge >= 10 && theAge < 100) {
        console.log(`${theAge * 12} Months`);
        console.log(`${theAge * 12 * 4} Weeks`);
        console.log(`${theAge * 12 * 4 * 7} Days`);
        console.log(`${theAge * 12 * 4 * 7 * 24} Hours`);
        console.log(`${theAge * 12 * 4 * 7 * 24 * 60} Minutes`);
        console.log(`${theAge * 12 * 4 * 7 * 24 * 60 * 60} Seconds`);
        console.log(`============`);
    }
    else {
        console.log(`Age Out Of Range`);
        console.log(`============`);
    }
}

ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months



//4


function checkStatus(a, b, c) {
    let arr = [a, b, c],string,number,bool;
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] == "string")
            string = arr[i];
        if (typeof arr[i] == "number")
            number = arr[i];
        if (typeof arr[i] == "boolean")
            bool = arr[i];
    }
    console.log(`Hello ${string}, Your Age is ${number}, You are ${bool ? "" : "Not "}avaliable for Hire`);
}

checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"



//5


function createSelectBox(startYear, endYear) {
    document.write("<select>");
    for (let i = startYear; i <= endYear; i++){
        document.write(`<option value="${i}">${i}</option>`);
    }
    document.write("</select>");
}

createSelectBox(2000, 2021);



//6


function multiply(...nums) {
    let multi = 1;
    for (let i = 0; i < nums.length; i++){
        if (!isNaN(nums[i])) {
            multi *= parseInt(nums[i]);
        }
    }
    console.log(multi);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000