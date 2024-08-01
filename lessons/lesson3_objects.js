//objects: an entity that can hold multiple values at the same time

var customer = {
    firstName: "John",
    lastName: "Smith", 
    cars: ["Volvo", "Toyota", "Tesla"] //Here an array is part of the object defined as a value
}
console.log(customer.firstName)
//can assigne a new value with 'dot' or 'bracket' notation
// dot notation
customer.firstName = "Mike"
// baracet notation
customer["lastName"] = "Silver"
//second option to access values:
console.log(customer["firstName"])
console.log(customer["lastName"])
//To use Interpolation to console.log both of these values 
console.log(`${customer.firstName} ${customer.lastName}`)

//arrays: another type of entity that is a list of items that you want to save
//arrays always have an index that start with 0, so "Volvo" will have an index of 0
var car = ["Volvo", "Toyota", "Tesla"]
//we can also override the values inside our array
car[1] = "BMW"
console.log(car[1])

//How to get access too first car of the customer
console.log(customer.cars[0])

