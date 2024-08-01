//-----------------------------------------------------------------------------------------------//
export function printAge(age) {
  console.log(age);
}

export class CustomerDetails {
  //inside this class we can now create our methods

//the ** is an example how I can add a description of what the method does, this description will be shown in the file where method is used when hovering over the method name
/**
 * This method will print the first name
 * @param {string} firstName 
 */
  printFirstName(firstName) {
    console.log(firstName);
  }

  printLastName(lastName) {
    console.log(lastName);
  }
}
//------------------------------------------------------------------------------------------------//

//WHEN RUNNING CODE COMMENT OUT ONE OF THE BLOCKS HERE AND IN LESSON9 FILE

//second way to export

class CustomerDetails {
  //removed export from in front of class on line above
  printFirstName(firstName) {
    console.log(firstName);
  }

  printLastName(lastName) {
    console.log(lastName);
  }
}

//moved constructor from file lesson9 where I call my methods to here where i keep my class

export const customerDetails = new CustomerDetails()
//--------------------------------------------------------------------------------------------------//