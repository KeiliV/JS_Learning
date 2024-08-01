//Conditional statements

//Conditional statements or conoditional logic is needed when you need to split the flow of your appplication based on the defined condition

// if(condition){
//     //execute somme code here
// } else {
//     //execute some code in here
// }

// If hour between 6 anf 12 print "Good Morning"
// If hour between 12 and 18 print "Good Afternoon"
// Otherwise: Good Evening

var hour = 10

if(hour >= 6 && hour < 12){
    console.log('Good Morning!')
} else if (hour >=12 && hour < 18){
    console.log('Good Afternoon!')
} else {
    console.log('Good Evening!')
}

var ageIsMoreThanEighteen = true
var isUSCitizen = true

if(ageIsMoreThanEighteen && isUSCitizen){
    console.log('Customer is eligible for drivers licence')
} else {
    console.log('Customer is not eligible for drivers licence')
}