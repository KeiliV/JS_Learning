var customerFirstName = "John";
var customerLastName = "Smith";
var customerAge = 25;

//example how TypeScript is preventing us from assigning incorrect value type, JavaScript doesnt
customerFirstName = 100;

//in TypeScript we can also explicitly assign what type of variable should it be

var customerSex: string = "male";
var customerHeight: number = 177;

//can also create my own custom type

type Customer = { firstName: string; lastName: string; active: boolean };

//now cannot asssigne incorrect type
var firstCustomer: Customer = 100;

//so must do
var secondCustomer: Customer = {
  firstName: "Mary",
  lastName: "Pink",
  active: true,
};

//Strict data typing helps overall during coding reduce the number of mistakes
//TypeScript helps to control the data integrity to make sure that you will not assigne wrong value to the variables