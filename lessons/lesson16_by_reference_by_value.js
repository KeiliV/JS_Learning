//Primitive types are immutable. That means that we can't change them. In order to remove them, we have to literally remove it
//form memory and create a new one.

//When I assigne var = 5; and var = 5; they dont know of each other. => this is what we call 'passd by value'
// Pass by value means we copy the value and we create that value somewhere else in memory

var a = 5; 
var b = a;

b++
console.log(a); //5
console.log(b); //6 , all that JS engine did was copy the primitive type value 5, so now b has a refrence to the value primitive type 5

//Objects are pass by refrence

let obj1 = { name: 'Yao', password: "123"};
let obj2 = obj2;

obj2.password = '345'

console.log(obj1);
console.log(obj2); // both of these objects password has now been changed.
//When I changed password i said to change the password on this object in memory that also obj1 is pointing to, or referencing.

//can be useful where: we can save memory by referencing only one location. 
//could be bad when someone else changes a property on that referenced object.

var c = [1,2,3,4,5];
var d = c;
d.push(123456);
console.log(c);
//now because arrays are objects, c should also have changed and it did.

//Example how to not change c in this case OR clone/copy and object and not reference it
var e = [1,2,3,4,5];
var f = [].concat(c);
//now c doesnt change

let obj3 = {
    x: 'a',
    y: 'b',
    z: 'c',
}
let clone = Object.assigne({}, obj3);
//here we can clone the object and not refence it
obj1.z = 5;
console.log(clone)

//newish feature to clone objects
let clone2 = {...obj3}
console.log(clone2)

