// Logical "AND" operator
console.log(true && true); // ALL values have to be TRUE for the expression to be true

// Logical "OR" operator
console.log(true || false); // ANY value should be TRUE for the expression to be TRUE. || is called a pipe

var ageIsMoreThanEighteen = false
var isUSCitizen = true

//first option: needs all requiremnts to be eligible
var eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen
console.log("This customer is eligible for DL: " + eligibilityForDriversLicense)

//other option: needs to meet only one requirement
var eligibilityForDriversLicense = ageIsMoreThanEighteen || isUSCitizen
console.log("This customer is eligible for DL: " + eligibilityForDriversLicense)

// Logical "NOT" operator
console.log(!true) //result: not TRUE will be FALSE
console.log(6 !== 10) //is six NOT equal to 10: result will be TRUE
console.log(6 == 10) //as example, without ! (the NOT operator sign) the result will be FALSE because 6 does not equal 10