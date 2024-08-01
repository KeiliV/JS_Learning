//Advanced Objects

//refrence type
//objects are refrence types in Javascrips,
//some other types such as string, number, boolean, undefined, null, symbols are defined
//by the programming language. They are primitive types.

//referncre types, that are non-primitive types, are defined by the programmer
//example:
const object1 = { value: 10 }; //created a new object that inside has value: 10
const object2 = object1; //this is just refencing object1, saying I want whatever is inside object1
const object3 = { value: 10 }; // here we are creatng a new object again that is not the same as object1

// context
//context gets confused with scope
//context tells you where we are within the object
console.log(this);
//this is the window object
window.alert();
//and
this.alert();
//is the same thing
//WATCH THE VIDEO AGAIN

// instantiation
//is when you make a copy of an object and reuse the code

//in instatiation we are making multiple copies or instances of an object

class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi Iam ${this.name}, I am a ${this.type}`);
  }
}
//when I want to add on top of whatever Player has I can use extend
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Weeee I'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Sean", "Dark Magic");
