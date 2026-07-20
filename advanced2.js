// 2. Given an array of mixed values (numbers and strings), separate them into two arrays and log both.

let arr = [10, "Apple", 20, "Banana", 30, "Orange"];
let numbers = [];
let strings = [];
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
        strings.push(arr[i]);
    } else {
        numbers.push(arr[i]);
    }

}

console.log(strings);
console.log(numbers);