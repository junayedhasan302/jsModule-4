// 4. Check two variables (one array, one not) and log whether each is an array.
// Expected: true then false, or false then true depending on order

let arr = [1,2,3,4,5,6];
let notArr = 7;
console.log(Array.isArray(arr));
console.log(Array.isArray(notArr));