/*4. Checking if it's an Array
    Instructions:

        1. Create different variables, each containing either an array or a
           non-array value.

        2. Now use isArray to check if each variable is an array.

        3. Print a message to the console indicating whether each variable is 
           an array or not.


*/

// 1. Create different variables, each containing either an array or a non-array value
let fruits = ["Apple", "Banana", "Orange"]; // Array
let book = "JavaScript Guide"; // String
let number = 42; // Number
let person = { name: "John", age: 30 }; // Object
let isStudent = true; // Boolean

// 2. Now use isArray to check if each variable is an array.

console.log(Array.isArray(fruits))
console.log(Array.isArray(book))
console.log(Array.isArray(number))
console.log(Array.isArray(person))
console.log(Array.isArray(isStudent))

//3. Print a message to the console indicating whether each variable is an array or not.
let isFruitsArray = Array.isArray(fruits);
let isBookArray = Array.isArray(book);
let isNumberArray = Array.isArray(number);
let isPersonArray = Array.isArray(person);
let isStudentArray = Array.isArray(isStudent)


console.log("Fruits is an Array",isFruitsArray )
console.log("Book is an Array",isBookArray )
console.log("Number is an Array",isNumberArray )
console.log("Person is an Array",isPersonArray )
console.log("Student is an Array",isStudentArray )


