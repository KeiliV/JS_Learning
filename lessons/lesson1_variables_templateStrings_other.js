//1. Hello World
console.log("Hello World!");

//Variables
var firstName = "John";
let lastName = "Smith";
console.log(firstName);

var age, dateOfBirth, sex;
age = "5";
sex = "Male";
console.log(age);
age = "6";
console.log(age);

//constants (cannot change value during runtime, also cannot be created without the value assigned: example you cannot do on Line 9)
const occupation = "Engineer";
console.log(occupation);

//data types
var middleNAme = "David"; //sring
var ageOfBrother = 25; //number
var isMarried = false; //boolean
var yearsInMArrige = null; //no value
var numberOfCars = undefined; //usually will see in an error state; we cannot use something that does not exist

//DO NOT USE VARIABLE -> USE let & const

//const

const wizardStats = {
  player: "Bobby",
  experience: 100,
  wizardLevel: false,
};
// with const here i cannot reassigne the obj wizardStats to a new variable; example: cannot do wizardStats = 5
//BUT I can change the property within that object; example obj.wizardLevel = true

//Destructuring

const wizardStatsObj = {
  player2: "Bobby",
  experience2: 100,
  wizardLevel2: false,
};

//const player2 = wizardStatsObj.player2;
//const experience2 = wizardStatsObj.experience2;
//let wizardLevel2 = wizardStats.wizardLeve2;

//instead of line 47 & 48 I can say:
const { player2, experience2 } = wizardStatsObj; //so I selceted the properties I wanted from the object and
//now I can use player2 or experience2 anywhere in the codebase

//and instead of let I can do
let { wizardLevel2 } = wizardStatsObj;

//Template strings

//not a template string
const greeting = "Hello " + name1 + " you seem to be doing " + greeting + "!";
//instead do template string with backticks ``
const name1 = "Sally";
const age = 45;
const pet = "dog";

const greetingBest = `Hello ${name1} you seem to be ${
  age - 10
}. What a lovely ${pet} you have!`;

//lets put that in a function as an example
function greet(name1 = "Keili", age = 30, pet = "horse") {
  return `Hello ${name1} you seem to be ${
    age - 10
  }. What a lovely ${pet} you have!`;
}

//Symbols
//not used very often but they are used because they create these completely unique types.
//so when you look below, sym2 === sym3 will give false although they look the same

let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");



