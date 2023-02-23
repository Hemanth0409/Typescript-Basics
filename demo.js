const personDescription = (name, city, age) =>
  `${name} lives in ${city}. he's ${age}. In 10 years he'll be ${age + 10}`;

  console.log(personDescription("John", "London", 29));
  //But if accidentally we pass the function the third parameter as a string, we get a wrong output:
  console.log(personDescription("John", "London", "Zero"));

//   JavaScript doesn't show an error because the program doesn't 
//   have a way of knowing what type of data the function should receive. 
//   It just takes the parameters we gave and performs the action we programmed, 
//   independently of the data type.

//Let's see the same example in Typescript -> Datatypes.ts

// JavaScript has the const keyword to specify that we want to prevent any changes 
// to the value of that variable through reassignment or prevent its re-declaration. 
// However, this doesn't mean that the value of the variable is immutable(can be changed)
// There are still other ways to change it. Here is an example:

const fruits = ["Apples", "Mangoes", "Bananas"];
fruits.push("Orange"); //adds elements at the end of the array
// ["Apples", "Mangoes", "Bananas", "Orange"] 
fruits[0] = "Papayas";
// ["Papayas", "Mangoes", "Bananas", "Orange"] 
fruits.unshift("Strawberry"); //adds elements at the beginning of the array
console.log(fruits); 
//fruits = vegetables // Error

//Mistyping example
let details = {
    name: 'John',
    age: 36
}
console.log(details.name + ' is ' + details.ahe + ' years old.');
// Mario is undefined years old.