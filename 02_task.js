/*2. Add or remove elements
    1. Declare an array of 3 tourist destinations
    2. Add a new tourist destination to your tourist array
    3. Add two more to your array
    4. Remove the last tourist destination you have added
    4. display the final array as output

*/ 
// 1
const destination = ['Cox`s Bazar', 'Ranga Mati', 'Bandarban'];
// 2
destination.push('Khagra Chori')
console.log("Add Destination in Array", destination);
// 3
destination.push('Mohamaya Lake', 'Nil Ghiri')
console.log("Add two More destination", destination);

// 4
destination.pop()
console.log("Remove the last Destination From array", destination);
// 5
console.log("Final Output of Array",destination)

