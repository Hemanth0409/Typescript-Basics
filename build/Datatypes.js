"use strict";
//TypeScript is transpiled(one language to another) into JavaScript using a compiler.
//Transpiling is the process of taking source code written in one language and transforming it into another language.
// Installing the Compiler
// TypeScript has an official compiler which can be installed through npm.
// Step 1: https://nodejs.org/en/ -> node -v
// Step 2: npm install -g typescript
// Step 3: tsc --init
// Step 4: Open tsconfig.json file -> "outDir": "./build" & "rootDir": "./src"
// Step 5: Run the following command to execute the TypeScript compiler -> tsc
//         It’ll compile all the files stored in the src directory(ts files) to build directory(js files)
// Step 6: node ./build/Datatypes.js to execute the CompilerDeprecationTypes
//Browsers won't be able to run code in a .ts file by themselves. 
// You will have to compile the TypeScript into plain JavaScript that 
// can be understood by browsers.
const personDescription = (name, city, age) => `${name} lives in ${city}. he's ${age}. In 10 years he'll be ${age + 10}.`;
console.log(personDescription("John", "London", 29));
//But if accidentally we pass the function the third parameter as a string, we get a wrong output:
//console.log(personDescription("John", "London", "Zero"));//Argument of type 'string' is not assignable to parameter of type 'number'.ts(2345)
//The beauty of TypeScript is that it's still as easy as JavaScript code, 
// we only add the type declarations to it. 
// That's why TypeScript is called a JavaScript superset, as TypeScript 
// only adds certain features to JavaScript.
// 1. Declaring Types
let Name = "John"; // type string
console.log(typeof Name);
console.log(Name);
let myData = {
    name: "John",
    city: "London",
    age: 29
};
console.log(myData);
let myData1 = {
    name: "John",
    city: "London"
};
console.log(myData1);
let myData2 = {
    name: "John",
    city: "London",
    age: "Twentynine"
};
console.log(myData2);
let myData3 = {
    name: "John",
    city: "London",
    age: "Twentynine",
    printMsg: (message) => message
};
console.log(myData3.name + " " + myData3.city + " " + myData3.age);
console.log(myData3.printMsg("Hola!"));
// 6. Typing Arrays
// For typing arrays the syntax is the following:
let numbersArray = [1, 2, 3]; // We only accept numbers in this array
let numbersAndStringsArray = [1, "two", 3]; // Here we accept numbers and strings.
console.log(numbersArray);
console.log(numbersAndStringsArray);
// 7. Tuples are arrays with fixed size and types for each position. They can be built like this:
let skill; //same order
skill = ["Typescript", 5];
//skill =[5,"Typescript"]; //Type 'string' is not assignable to type 'number'.
console.log(skill);
//8. Another example to show Why Typescript over Javascript
//Refer demo.js for Javascript code
let fruits = ["Apples", "Mangoes", "Bananas"];
console.log(fruits); //example for mistyping
//fruits.push("Orange"); // Error 
//fruits[10] = "Papayas"; // Error
//9. Mistyping age as ahe is not considered an error in JavaScript, 
//but it would have been caught in TypeScript.
//Mistyping example
let details = {
    name: 'John',
    age: 36
};
//console.log(details.name + ' is ' + details.ahe + ' years old.');//Property 'ahe' does not exist on type '{ name: string; age: number; }'.ts(2339)
console.log(details.name + ' is ' + details.age + ' years old.');
// 10.JSON or JavaScript Object Notation is an open standard file format used for transferring data. 
// Parsing JSON data is really easy in Javascript or Typescript. 
// Typescript doesn’t have any different methods for JSON parsing. 
// We can use the same JSON.parse method used with JavaScript.
// Syntax :
// The syntax of JSON.parse method is as below :
// JSON.parse(text[, reviver])
// It takes two parameters: the first parameter text is the JSON string. 
// The second parameter is optional. It is a reviver function 
// that can perform any operation on the JSON data before it returns it.
// Example 1
const data = `{
    "name" : "Alex",
    "age" : 20,
    "grade" : "A"
}`;
let json = JSON.parse(data); //JSON.parse can parse any type of valid JSON data.
console.log(json);
console.log(`Name: ${json.name}, Age: ${json.age}, Grade: ${json.grade}`);
// Example 2
const data1 = `{
    "name": "Alex",
    "age": 20,
    "grade": "A",
    "marks": [
        {"sub1" : 80},
        {"sub2" : 30}
    ]
}`;
let json1 = JSON.parse(data1);
console.log(json1);
console.log(`sub1: ${json1.marks[0].sub1} sub2: ${json1.marks[1].sub2}`);
// Example 3:
// Using reviver :
// Using the second parameter, reviver, we can modify the JSON object before the parse method returns it. 
// We can also add one condition in the reviver to transform only specific values.
const data2 = `{
    "one": 1,
    "two": 2,
    "three": "3",
    "four": 4,
    "others": [
        {
            "five": 5
        }
    ]
}`;
let json2 = JSON.parse(data2, (k, v) => {
    if (typeof v === "number") {
        return v * 2;
    }
    else {
        return v;
    }
});
console.log(json2);
//--------------------------
const data3 = `
    [{
    "name":"John",
    "age":18
    },
    {
    "name":"John",
    "age":18
    },
    {
    "name":"John",
    "age":18
    }]`;
let json3 = JSON.parse(data3, (k, v) => {
    if (v < 18) {
        return 20;
    }
    else {
        return 22;
    }
});
console.log(json3);
// 11. Generics allow creating 'type variables' which can be used to create classes, 
// functions & type aliases that don't need to explicitly define the types that they use.
// Generics makes it easier to write reusable code.
//function add(num1:number,num2:number)
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('John', 30));
console.log(createPair('John', 'Johnny')); // ['hello', 42]
