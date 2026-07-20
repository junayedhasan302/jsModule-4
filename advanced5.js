// 5. Rotate an array left by one position (first item moves to the end). Log the result.
// Expected: [2,3,4,5,1] from [1,2,3,4,5]



let arr = [1, 2, 3, 4, 5];
let first = arr.shift(); 
// shift() removes the first element. 
// Store it in first.
arr.push(first); // push() adds it to the end.
console.log(arr);