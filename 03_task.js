/*3. Checking Array Membership with ‘includes’
    Instructions:

        1. Create an array of books containing different book.

        2. Use the includes method to check if the array contains a javascript book.

        3. Print a message to the console indicating whether the element is 
           present  in the array or not.
*/

// 1
const books = ['javascript book', 'python book', 'php book'];
// 2
console.log("find The Book From Array", books.includes('javascript book'));

// 3

if (books.includes('javascript book')){
    console.log("The array contains a javascript book.");
} else {
    console.log("The array does not contain a javascript book.");
}