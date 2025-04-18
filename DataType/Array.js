//What is an Array in JavaScript?
//An array is a list-like object used to store multiple values in a single variable.

let fruits = ["apple", "banana", "mango"];
let randomStuff = [42, "hello", true, null, [1, 2]];

//Accessing values:
//Arrays are zero-indexed, meaning the first element is at index 0.

let colors = ["red", "green", "blue"];

console.log(colors[0]); // "red"
console.log(colors[2]); // "blue"

// Changing values:
colors[1] = "yellow"; // Change "green" to "yellow"
console.log(colors); // ["red", "yellow", "blue"]

// Common array methods:
let nums = [1, 2, 3, 4];

nums.push(5);        // Add to end: [1, 2, 3, 4, 5]
nums.pop();          // Remove from end: [1, 2, 3, 4]
nums.unshift(0);     // Add to start: [0, 1, 2, 3, 4]
nums.shift();        // Remove from start: [1, 2, 3, 4]

console.log(nums.includes(3));  // true
console.log(nums.indexOf(2));   // 1
console.log(nums.length);       // 4
console.log(nums.reverse());     // [4, 3, 2, 1]
