//Relational or comparison operators

// > - more than
// <- less than
// >= more than equal
// <= less than equal

//With relational operators we are comparing what is on the left vs on the right
//a result of an operationl operator (this is also a logical operator) will be always a boolean
var results = 10 > 5
//console.log(results)

//Equality operators

var x = 1
console.log(x == "1") //loose comparison: we are comparing the value on the left to the value on the right, we do not compare the data type
console.log(x === "1") // strict comparison: here we are comparing the value and the data type of the value. In here the number is a string
console.log(x === 1) //now this will be true because the number is a number not a string
