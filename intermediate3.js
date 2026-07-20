// 3. Turn an array of words into a single sentence string.
// Expected: a string like "word word word"

// join(" ") → Words separated by spaces 
// join(", ") → Words separated by commas
// join("") → No separator (joins everything together)


let words = ["I", "love", "JavaScript"];
// array.join(separator)
let sentence = words.join(" "); // words.join("--"), words.join(",")
console.log(sentence);