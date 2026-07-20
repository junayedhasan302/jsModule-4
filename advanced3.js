// 3. Given an array of numbers, find the largest and smallest value without using Math.max or Math.min directly on the whole array (use a loop).

let numbers = [20, 50, 70, 10, 30, 55, 60, 90, 80];

let largest = numbers[0];
let smallest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}
console.log("Largest =", largest);
console.log("Smallest =", smallest);