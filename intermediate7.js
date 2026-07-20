// 7. Sort an array of numbers in ascending order, keeping numeric order correct (not string order).

// Sorting strings: array.sort();
// Sorting numbers: array.sort((a, b) => a - b);

/**
numbers.sort((a, b) => a - b);

 *If a - b is negative, a comes before b.
 *If a - b is positive, b comes before a.
 *If a - b is 0, their order stays the same.
 */



// Sorting strings:
// let num = [20,50,70,10,30,55,60,90,80];
// num.sort();
// console.log(num);


// Sorting numbers:
let num = [20,50,70,10,30,55,60,90,80];
// num.sort((a, b) => b - a); // Numbers (Descending):
num.sort((a, b) => a - b); // Numbers (Ascending):
console.log(num);