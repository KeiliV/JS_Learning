// Type Coercion
// Type coercion means that when the opearants, that is the things to the left and right of the operator (==),
// are different types. One of them will be converted to into an equivalent value by the JS engine. 
// example

1 == '1';
//will convert to
1 == 1;

//All languages have type coercions, in memory different types will look completley different
// For example: number 5 in actual physical memory of your computer is represented by zeroes and ones. 
// JS has especially heavy type coercion nature to it because it's dynamically typed.

// in JS type coercion happenes when you use double ==, which simply means, compare the two different values
// and try to coerce one into the same type

// === means, compare two values but do not try to coerce any values.



//EXERCISES
//Evaluate these:
//#1
[2] === [2] //false
{} === {} //false

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
//4
const object2 = object1; 
//4
const object3 = object2; 
//4
const object4 = { a: 5}; 
//5
object1.a = 4;

//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
	constructor(name, type, color) {
		this.name = name;
		this.color = color;
		this.type = type;
	}
}

class Mamal extends Animal {
	constructor(name, type, color) {
		super(name, type, color)
	}
	sound() {
		console.log(`Moooo I'm ${this.name} and I'm a ${this.color} ${this.type}`);
	}
}

const cow = new Mamal('Shelly', 'cow', 'brown');