//TERENARY OPERATOR

function isUserValid(bool) {
    return bool;
}
 var answer = isUserValid(true) ? "You may enter" : "Access Denied"
 //we are saying if isUserValid true then do expression "You may enter", if its false do expression "Access Denied"
 
//line 6 is the same thing as this if statement

function condition() {
    if (isUserValid(true)) {
        return "You may enter";
    } else {
        return "Access Denied";
    }
}

var answer2 = condition()
//now answer and answer2 will give the same reply

 //another example:
 var automatedAnswer = 
    "Your account # is" + ( isUserValid(false) ? "1234" : "not available");
//this will now give "Your account # is not available"
//if whe chnage isUserValid(true), it will give the "Your account # is 1234"

//the SWITCH Statement
//good for when you have a lot of conditions

function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encounter a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "left":
            whatHappens = "you run into a troll";
            break;  
        default:
            whatHappens = "please enter a valid direction";
    }  
    return whatHappens; 
}