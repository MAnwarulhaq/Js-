let name = 'Haadi';
let greeting = "What's up?";
let fancy = `Hello, ${name}!`; // template literal with variable
// What is a string in JavaScript?
//A string is just a sequence of characters used to represent text. You can write strings in:

//Single quotes: 'hello'

//Double quotes: "hello"

//Backticks (template literals): `hello`

console.log(name); // Output: Haadi
console.log(greeting); // Output: What's up?
console.log(fancy); // Output: Hello, Haadi!

//String methods (some handy ones):
let msg = "JavaScript";

console.log(msg.length);          // 10
console.log(msg.toUpperCase());  // "JAVASCRIPT"
console.log(msg.toLowerCase());  // "javascript"
console.log(msg.includes("Script")); // true
console.log(msg.slice(4));       // "Script"

//Concatenation (joining strings):
let firstName = "Haadi";
let lastName = "Dev";
let fullName = firstName + " " + lastName; // "Haadi Dev"
console.log(fullName); // Output: Haadi Dev