// 1. Given an array of numbers, remove duplicates and log the unique values only.

// //TYPE: 1
// new Set(numbers) removes duplicate values.
// ... (spread operator) converts the Set back into an array.
// console.log() prints the unique array.

// let numbers = [10, 20, 30, 20, 10, 40, 50, 30];
// let unique = [...new Set(numbers)];
// console.log(new Set(numbers));



// TYPE: 2
// Create an empty array unique.
// Loop through each element of numbers.
// includes() checks whether the current number already exists in unique.
// ! means "not".
// If the number is not in unique, push() adds it.
// Finally, print the unique array.

let numbers = [10, 20, 30, 20, 10, 40, 50, 30];
let unique = [];
for (let i = 0; i < numbers.length; i++) {
    if (!unique.includes(numbers[i])) {
        unique.push(numbers[i]);
    }
}
console.log(unique);