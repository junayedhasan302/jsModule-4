// ======================================
// JavaScript Array Revision
// ======================================

// Student marks
let marks = [75, 90, 85, 90, 60, 75, 95];

console.log("Original Array:");
console.log(marks);

// --------------------------------------
// Access elements
// --------------------------------------
console.log("\nFirst Mark:", marks[0]);
console.log("Third Mark:", marks[2]);

// --------------------------------------
// Update an element
// --------------------------------------
marks[4] = 65;
console.log("\nAfter Updating:");
console.log(marks);

// --------------------------------------
// Array length
// --------------------------------------
console.log("\nTotal Marks:", marks.length);

// --------------------------------------
// Add elements
// --------------------------------------
marks.push(100);      // Add at end
marks.unshift(50);    // Add at beginning

console.log("\nAfter push & unshift:");
console.log(marks);

// --------------------------------------
// Remove elements
// --------------------------------------
marks.pop();      // Remove last
marks.shift();    // Remove first

console.log("\nAfter pop & shift:");
console.log(marks);

// --------------------------------------
// Check value exists
// --------------------------------------
console.log("\nContains 90?");
console.log(marks.includes(90));

// --------------------------------------
// Find index
// --------------------------------------
console.log("\nIndex of 95:");
console.log(marks.indexOf(95));

// --------------------------------------
// Loop using for
// --------------------------------------
console.log("\nUsing for loop:");

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i]);
}

// --------------------------------------
// Loop using while
// --------------------------------------
console.log("\nUsing while loop:");

let i = 0;

while (i < marks.length) {
    console.log(marks[i]);
    i++;
}

// --------------------------------------
// Combine arrays
// --------------------------------------
let extraMarks = [80, 88];

let allMarks = marks.concat(extraMarks);

console.log("\nCombined Array:");
console.log(allMarks);

// --------------------------------------
// Slice (doesn't change original)
// --------------------------------------
let firstThree = allMarks.slice(0, 3);

console.log("\nSlice:");
console.log(firstThree);

// --------------------------------------
// Join into string
// --------------------------------------
let sentence = ["Learning", "JavaScript", "is", "fun"];

console.log("\nJoin:");
console.log(sentence.join(" "));

// --------------------------------------
// Check array
// --------------------------------------
console.log("\nArray Check:");
console.log(Array.isArray(marks));
console.log(Array.isArray(100));

// --------------------------------------
// Reverse
// --------------------------------------
let reverseMarks = [...marks];

reverseMarks.reverse();

console.log("\nReverse:");
console.log(reverseMarks);

// --------------------------------------
// Sort strings
// --------------------------------------
let names = ["Rahim", "Junayed", "Karim", "Anika"];

names.sort();

console.log("\nAlphabetical:");
console.log(names);

// --------------------------------------
// Sort numbers
// --------------------------------------
let numbers = [20, 5, 70, 10, 40];

numbers.sort(function (a, b) {
    return a - b;
});

console.log("\nAscending:");
console.log(numbers);

// --------------------------------------
// Remove duplicates
// --------------------------------------
let duplicate = [10, 20, 30, 20, 10, 40];

let unique = [];

for (let i = 0; i < duplicate.length; i++) {

    if (!unique.includes(duplicate[i])) {
        unique.push(duplicate[i]);
    }

}

console.log("\nUnique:");
console.log(unique);

// --------------------------------------
// Separate numbers and strings
// --------------------------------------
let mixed = [10, "Apple", 20, "Banana", 30];

let num = [];
let str = [];

for (let i = 0; i < mixed.length; i++) {

    if (typeof mixed[i] === "number") {
        num.push(mixed[i]);
    } else {
        str.push(mixed[i]);
    }

}

console.log("\nNumbers:");
console.log(num);

console.log("Strings:");
console.log(str);

// --------------------------------------
// Largest & Smallest
// --------------------------------------
let values = [20, 50, 70, 10, 90, 30];

let largest = values[0];
let smallest = values[0];

for (let i = 1; i < values.length; i++) {

    if (values[i] > largest) {
        largest = values[i];
    }

    if (values[i] < smallest) {
        smallest = values[i];
    }

}

console.log("\nLargest:", largest);
console.log("Smallest:", smallest);

// --------------------------------------
// Flatten nested array
// --------------------------------------
let nested = [1, [2, 3], [4, [5, 6]]];

console.log("\nFlatten:");
console.log(nested.flat(2));

// --------------------------------------
// Rotate left
// --------------------------------------
let rotate = [1, 2, 3, 4, 5];

let first = rotate.shift();

rotate.push(first);

console.log("\nRotate Left:");
console.log(rotate);



// ======================================
// What I Learned
// ======================================

/*
==============================
JavaScript Arrays - Side Notes
==============================

1. Array creation
   // Store multiple values in one variable.
   let arr = [1, 2, 3];

2. Access array elements
   // Index starts from 0.
   arr[0]

3. Update array elements
   // Replace an existing value.
   arr[1] = 100;

4. Array length
   // Total number of elements.
   arr.length

5. push()
   // Add item at the end.

6. pop()
   // Remove last item.

7. shift()
   // Remove first item.

8. unshift()
   // Add item at the beginning.

9. includes()
   // Returns true/false if value exists.

10. indexOf()
    // Returns index or -1 if not found.

11. for loop
    // Best when you need the index.

12. while loop
    // Runs until the condition becomes false.

13. concat()
    // Combine two or more arrays.

14. slice()
    // Copy a portion. Original array stays unchanged.

15. join()
    // Convert array into a string.

16. Array.isArray()
    // Check whether a variable is an array.

17. reverse()
    // Reverse the original array.

18. sort() for strings
    // Sort alphabetically (A → Z).

19. sort(function(a, b){ return a - b; })
    // Sort numbers in ascending order.

20. Remove duplicates
    // Keep only unique values.
    // Use Set or loop + includes().

21. typeof
    // Check data type.
    // "number", "string", "boolean", etc.

22. Separate numbers & strings
    // Use typeof inside a loop.

23. Find largest number
    // Compare every element using a loop.

24. Find smallest number
    // Compare every element using a loop.

25. flat()
    // Convert nested arrays into one array.

26. Rotate array (shift + push)
    // Move first element to the end.

27. if / else
    // Execute code based on a condition.

28. Comparison operators
    // ==, ===, !=, !==, >, <, >=, <=

29. Logical NOT (!)
    // Reverse true ↔ false.

30. console.log()
    // Print output to the console.

==============================
Things to Remember
==============================

Array Index:
0   1   2   3
A   B   C   D

Most Used Methods:
push()      -> Add last
pop()       -> Remove last
shift()     -> Remove first
unshift()   -> Add first
includes()  -> Exists?
indexOf()   -> Position
concat()    -> Merge
slice()     -> Copy part
join()      -> String
reverse()   -> Reverse
sort()      -> Sort
flat()      -> Flatten

Loop Pattern:
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

while Pattern:
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
*/