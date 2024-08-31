/*5. Combining Arrays
    Instructions:

        1. Create two arrays of your choice.
        2. Use the concat method to combine the two arrays into a new array.
        3. Print both the original arrays and the combined array using console.log().  
*/
// 1. Create two arrays of My choice.
let array1 = ["Apple", "Banana", "Cherry"];
let array2 = ["Orange", "Mango", "Pineapple"];

// 2. Use the concat method to combine the two arrays into a new array.
let concatArray = array1.concat(array2);
console.log("Concat Two Array", concatArray)

// 3. Print both the original arrays and the combined array using console.log().
console.log("Array One", array1);
console.log("Array Two", array2);
console.log("New Array", concatArray);