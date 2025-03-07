/*Bahar Lawter Inital changes

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


// let result = "5" - 2;
// console.log("The result is: " + result);

// let isValid = Boolean("false");
// if (isValid) {
//     console.log("This is valid!");
// }

// let age = "25";
// let totalAge = age + 5;
// console.log("Total Age: " + totalAge);

//Part 1 and 2

let result = Number("5") - 2; // Explicit type of conversion is added as a Number()function to conver the string to a number
console.log("The result is: " + result); //The result will be 3

let isValid = Boolean("false"==="true");// true is a string and false is a sting so the reslult will be false. 
if (isValid) {
    console.log("This is valid!")
    else{console.log("This is Not valid");}// the result will be "This is Not valid"
}

let age = Number("25"); // Explicit type of conversion is added as a Number() to conver a string to a number
let totalAge = age + 5;
console.log("Total Age: " + totalAge); //the output will be 30

//Part 3
//Implicity type of conversion
let z=5+"5";//the outputl will be 55
console.log(z);
//Expilcit type of conversion
let number=Number('5')+5; //the output will be 10
console.log(number);

//Edge case Nan
let name=Number("Bahar")+5;//the output will be NaN
console.log(name);