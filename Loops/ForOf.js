// What is for of loop?
//The for...of loop in JavaScript is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It's super clean and readable when you just want to go through the values.

// Syntax:
for (const item of iterable) {
    // code to execute with item
  }
// Example:
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Output: apple banana cherry

// Example with String:
const str = "Hello";
for (const char of str) {
  console.log(char);
}
// Output: H e l l o

//❗Note:
//for...of gives you values, not indexes.
// If you need indexes, use for...in or regular for loop.