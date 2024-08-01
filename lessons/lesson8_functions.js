// functions

// Why do we need JavaScript functions?
// Functions are used to organise the code into reusable component so we can reuse the same functionality again and again by calling the function

// Declarative functions

//here I am creating a function
function helloOne() {
  console.log("Hello one!");
}
//in order to call this function we need to invoke it
helloOne();

//Anonymous function (the function doesnt have a name)
//Also Function Expression

//so for this function to work we need to assigne the result of this function to certain variable
var hellowTwo = function () {
  console.log("Hello two!");
};
hellowTwo();

//NOTE: the difference between declarative and anonymous functions is that:
//Declarative function can be called/invoked in the beginning of the file even if the function is declared later on in the file
//Anonymous function must be called only after declaring a function

//ES6 function syntax or arrow function
var helloThree = () => {
  console.log("Hello three!");
};
helloThree();

//Function with arguments
function printName(name) {
  //inside () I am decalring the parameter of the function and I giving it a name 'name'
  //now I will print any name I pass into this function to the console
  console.log(name); // I am calling this 'name' parameter inside the function here
}
// So now when I am calling this function I pass the name I want to print
printName("John");

//To add another parameter example
function printName2(name, lastName) {
  console.log(name + " " + lastName);
}
printName2("John", "Smith");

//Function with return
function multipleByTwo(number) {
  var result = number * 2;
  return result;
}

var myResult = multipleByTwo(5);
console.log(myResult);

//what is the benefit of declaring a function anf calling it in the same JavaScript file?
//You can also keep them in one place but call them from another place:
//IMPORTING FUNCTION (first way)
import { printAge } from "../helpers/printHelper.js";

printAge(5);

//IMPORT EVERYTHING

import * as helper from "../helpers/printHelper.js";
helper.printAge(7);

//ARROW FUNCTIONS

//instead of
function addTogheter(a, b) {
  return a + b;
}
 addTogheter(1, 2);

 //can use an arrow function
  const addTwoNumbers = (a, b) => a + b;
  //can be all on one line and not have a return because when a fat arrow function is on one line it will 
  //assume you want to retun this (only if you have a single return)

  addTwoNumbers(2, 2);
