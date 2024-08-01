// CLOUSERS:
// rule in JS: the child scope always has access to parent scope

//Closures- a function ran, the function executed. It's never going to execute again
//BUT it is going to remember that there are references to these variables
//so the child scope always has access to parent scope

// CURRYING- the process of convreting a function that takes multiple arguments into a function that
//takes them one at a time

const multiply = (a, b) => a * b;

const curriedMultiply = (a) => (b) => a * b;
//to call it
curriedMultiply(3)(4);
//explanation: created a variable curriedMultiply that accepts a parameter 3 and once I run it,
//it returns another function that accepts 4, and that functions multiplies 3 * 4
//result: 12

//now its more extensible
const multiplyBy5 = curriedMultiply(5);
//result: 55

// COMPOSE - the act of putting two functions together to form a third function
//where the output of one function is the input of the other

const compose = (f, g) => (a) => f(g(a));
//parameters f anf g return a funtion thaht takes parameter a that returns a function that has f(g(a))
//really advanced stuff

//example
const sum = (num) => num + 1;
compose(sum, sum)(5);
//result: 7


// THE MOST IMPORTANT THING TO DO AS A DEVELOPER = 
// AVOID SIDE EFFECTS, AND FUNCTIONAL PURITY

//example of side effect
var a = 1;
function b() {
    a = 2;
}
//we want to think of funcions as its own universe BUT here it is affecting the outside world by changing a

//In functional purity, we always want to return something and avoid side effects. 
//By doing this we are creating somrthing that we call deterministic
//Deterministic: no matter what, if my input goes through the function it will always return the same value