// 4. Flatten a nested array (array containing arrays) into a single flat array.
// Expected: [1,2,3,4,5,6] from something like [1,[2,3],[4,[5,6]]]

// flat(2) removes nested arrays up to 2 levels deep.
// Returns a new one-dimensional array.

let arr = [1, [2, 3], [4, [5, 6]]];
// let flatArray = arr.flat(0); // [1, [2, 3], [4, [5, 6]]]
// let flatArray = arr.flat(1); // [ 1, 2, 3, 4, [ 5, 6 ] ]

let flatArray = arr.flat(2); // [ 1, 2, 3, 4, 5, 6 ]
console.log(flatArray);