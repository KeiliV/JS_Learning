// Classes and methods
// classes and methods are another form of abstraction in JavaScript, similar to functions, to create reusable components of your code

//--------------------------------------------------------------------------------------------------//
import { CustomerDetails } from "../helpers/printHelper.js";

//now I need to create an instance of this class:
var customerDetails = new CustomerDetails(); //note: variable customerDetails is lower cased but can be any name as well.
//Now the customerDetails becomes our object and using this object we can call methods from class CustomerDetails
customerDetails.printFirstName("Keili");
customerDetails.printLastName("Vutt");
//--------------------------------------------------------------------------------------------------//

//WHEN RUNNING CODE COMMENT OUT ONE OF THE BLOCKS HERE AND IN PRINTHELPER FILE

//--------------------------------------------------------------------------------------------------//
//Second way to import
//removed the constractor from here and moved it to the file I had my class
//now instead of importing the entire class, I will just import the customerDetails instance of our class

import { customerDetails } from "../helpers/printHelper.js";

customerDetails.printFirstName("Keili");
customerDetails.printLastName("Vutt");
//--------------------------------------------------------------------------------------------------//

