//Concatination
var price = 50
var itemName = "Cup"
//var messageToPrint = "The price of your Cup is 50 dollars"

//Replace "Cup" with variable itemName and 50 with variable price -> with the concept called 'Concatination'
//we need to break our string into smaller strings and combine them together

var messageToPrint = "The price of your "+itemName+" is "+price+" dollars" //breaking the string with a '+'
console.log(messageToPrint)

//Interpolation

var messageToPrint2 = `The price your ${itemName} is ${price} dollars`
console.log(messageToPrint2)

//difference is that you create a singel string but replace a needed section of your string with the variables 

//Concationation and interpolation is very useful when you need to combain several values into new one and use it later on in your code