//1


function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        return zName.split(" ")[0] + " " + zName.split(" ")[1][0].toUpperCase() + ".";
    }
    function ageWithMessage(zAge) {
        return `Your Age is ${parseInt(zAge)}`;
    }
    function countryTwoLetters(zCountry) {
        return zCountry.slice(0,2).toUpperCase();
    }
    function fullDetails() {
        return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, You live in ${countryTwoLetters(zCountry)}`;
    }
    return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));



//2


let itsMe = () => `Iam A Normal Function`;

console.log(itsMe());

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org"));


//3


let checker = (zName) => (status) => (salary) => status === "Available" ? `${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000));
console.log(checker("Ahmed")("Not Available")());


//4


function specialMix(...data) {
    let sum = 0, num = 0;
    for (let i = 0; i < data.length; i++){
        if (isNaN(parseInt(data[i])))
            ++num;
        else
            sum += parseInt(data[i]);
    }
    return num == data.length ? "All Is Strings" : sum;
}


console.log(specialMix(10, 20, 30));
console.log(specialMix("10Test", "Testing", "20Cool"));
console.log(specialMix("Testing", "10Testing", "40Cool"));
console.log(specialMix("Test", "Cool", "Test"));