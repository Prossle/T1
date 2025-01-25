//1

document.write(`<h1>Elzero</h1>`);
document.write(`
    <style>
        h1{
            color: blue;
            font-size: 80px;
            font-weight: bold;
            text-align: center;
            font-family: Arial;
        }
    </style>`);



//2

console.log("%cElzero %cWeb %cSchool",
    "color: red; font-size: 40px",
    "font-size: 40px; font-weight: bold; color: green",
    "font-size: 40px; background-color: blue; color: white;");


//3

console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Group Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

//4


console.table(["one", "two", "three", "four", "five"]);


//5

