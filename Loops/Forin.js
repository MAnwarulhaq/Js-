// What is for in loop?
// The for...in loop in JavaScript is used to iterate over the enumerable properties of an object. It's particularly useful when you want to loop through the keys of an object or the indices of an array.

//  Syntax:
for (const key in object) {
    // code to use key and object[key]
  }
// Example:
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
for (const key in person) {
  console.log(key + ": " + person[key]);
}// Output: name: John age: 30 city: New York  

// Example with Array:
const arr = ["apple", "banana", "cherry"];
for (const index in arr) {
  console.log(index + ": " + arr[index]);
}// Output: 0: apple 1: banana 2: cherry