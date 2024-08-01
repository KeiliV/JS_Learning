// scope - important concept in JavaScript
// scope means variable access, by default you are in the root scope which is the window object
// when you are working in the browser this is called the root scope
// functions have access to any varaible in the root scope

// Example of scope

//root scope (window)

var fun = 5;

function funFunction() {
  //child scope
  var fun = "hello";
  console.log(fun);
}

function funerFunction() {
  //child scope
  var fun = "Bye";
  console.log(fun);
}

function funestFunction() {
  //child scope
  fun = "AHHH";
  console.log(fun);
}
//each of these functions create their own scope and console.log fun, in each one of them fun means something different

console.log(fun);
//this will console log 5
//now I call all the functions
funFunction();
funerFunction();
funestFunction();
//now all values of fun (4 of them) will be logged to the console

//if I now call
console.log(fun); //it will log AHHH, that is because in the first two functions I wont be able to access
//the the funvariable in the root scope, because I have overwritten name (notice it says var fun = xxx)
//in two first functions there is a NAMING CONFLICT, we have used the same name for a variable as in the root scope
//so we loose access to this fun varaible in the root scope

