//Solve these problems:

//#1 Create a one line function that adds adds two parameters

const oneLiner = (a, b) => a + b;

//Closure: What does the last line return?
const addTo = x => y => x + y  //This is an arrow function expression.
//x => y => x + y: This part represents a function that takes one argument x and returns another function.
//y => x + y: This inner function takes one argument y and returns the result of adding x and y.
//SO the addTo function is a higher-order function. It takes one argument x and returns another function that takes one argument y.
//When you call addTo with an argument x, you get back a function that adds x to its argument y.
//This is an example of currying in JavaScript, where you can partially apply arguments to a function to create a new function.
var addToTen = addTo(10) 
addToTen(3)
//returns 13



//Currying: What does the last line return?
const sum1 = (a, b) => a + b
const curriedSum1 = (a) => (b) => a + b
curriedSum1(30)(1)
//31


//Currying: What does the last line return?
const sum2 = (a, b) => a + b
const curriedSum2 = (a) => (b) => a + b
const add5 = curriedSum2(5)
add5(12)
//17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const addd5 = (num) => num + 5;
compose(add1, addd5)(10)
//16

//What are the two elements of a pure function?
//1. Deterministic --> always produces the same results given the same inputs
//2. No Side Effects -->  It does not depend on any state, or data, 
//change during a program’s execution. It must only depend on its input elements.