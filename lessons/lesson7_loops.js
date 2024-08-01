//Loops

//Loops are needed when you need to repeate a certain operation multiple times

//EXAMPLE: type 'Hello World' to console five times

// for (statement1; statement2; statement3) {
//   //statement1: what we want to start the loop with
//   //statement2: will define the condition of how long do we want to run our loop and when we want to stop the loop
//   //in other words: this is the confition stopping  point for the loop to complete the execution
//   //statement3: will define what we need to do after each cycle of the loop
// }

// for loop (also called: for i loop)
for (let i = 0; i < 5; i = i + 1) {
  //   // let i=0  here we are declaring our initial statement (statement1). Creating a new variable i and assign the value 0 so starting our loop with 0\
  //   // i < 5    here I am saying I want this loop to run until i is less than 5
  //   // i= i + 1 (same as i++) here I am saying that after each loop cycle is completed I want to increase i by 1
  console.log("Hello World");
}

//Here i am just adding i (by using concatination) to print on console to make sure the loop is working correctly
for (let i = 0; i < 5; i++) {
  console.log("Hello World" + i);
}

//EXAMPLE: for of loop
var cars = ["Volvo", "Toyota", "Tesla"];
//We want to loop through each of these items and print them on console one by one
for (let car of cars) {
  // here car is the variable that will be our iterator and this variable will hold for us value from the array during each iteration of the cycle
  console.log(car)
}

//in this example we want to stop the loop once we find the value 'Toyota'
for (let car of cars) {
  console.log(car)
  if(car == 'Toyota'){
    break
  }
}

//EXAMPLE with ES6 syntax for each loop
cars.forEach( car => { //fat arrow syntax =>
  console.log(car)
})