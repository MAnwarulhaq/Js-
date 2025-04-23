// .charAt()
// The .charAt() method in JavaScript is used to get the character at a specific index in a string.

// Syntax:
string.charAt(index)
// index: The position of the character you want (starts at 0)


// Example:
const name = "Haadi";

console.log(name.charAt(0)); // H
console.log(name.charAt(2)); // a
console.log(name.charAt(10)); // '' (empty string, because index is out of range)

// Bonus Tip:
//You can also use bracket notation which is shorter:
console.log(name[0]); // Same as name.charAt(0)

// what is .cancate() method?
//.concat() — a method used to combine (concatenate) strings in JavaScript.

// Syntax:
// string1.concat(string2, string3, ...)

// Example:
const firstName = "Haadi";
const lastName = "Ali";

const fullName = firstName.concat(" ", lastName);
console.log(fullName); // Haadi Ali

// what is .includes() method?

//The .includes() method in JavaScript is used to check if a string contains a specific substring. It returns true if the substring is found, and false otherwise.

// Syntax:
string.includes(substring, startIndex)
// substring: The string you want to search for.
// startIndex (optional): The index at which to start the search. Default is 0.
// Example:
const message = "Hello, Muhammad!";

console.log(message.includes("Muhammad")); // true
console.log(message.includes("Anwar"));     // false
console.log(message.includes("Hello"));     // true
console.log(message.includes("hello"));     // false (case-sensitive)
console.log(message.includes(" ", 7));     // true (searching from index 7)

// what is .indexOf() and lastidexof method?
//indexOf()
//Returns the first occurrence of a specified value in a string.

//Syntax:
// string.indexOf(searchValue, startIndex)
let str = "hello world";
console.log(str.indexOf("o"));      // 4
console.log(str.indexOf("world"));  // 6
console.log(str.indexOf("x"));      // -1
console.log(str.indexOf("o", 5));  // 7 (search starts from index 5)

// lastIndexOf()
//Returns the last occurrence of a specified value in a string.
let str1 = "hello world";
console.log(str1.lastIndexOf("o"));     // 7 (the 'o' in "world")
console.log(str1.lastIndexOf("l"));     // 9 (last 'l' in the string)

// What is .slice() and split() method?
// .slice()
// slice() – Extract a portion of a string and return it as a new string.
// Syntax:
// string.slice(startIndex, endIndex)
// Example:
const str2 = "Hello, World!";
console.log(str2.slice(0, 5)); // "Hello"
//You can also use negative indices to count from the end:
console.log(str2.slice(-6)); // "World!"
console.log(str2.slice(-6, -1)); // "World"

// .split()
// split() – Split a string into an array
// Syntax:
// string.split(separator, limit)
// Example:
const str3 = "apple,banana,cherry";
const fruits = str3.split(","); // Split by comma
console.log(fruits); // ["apple", "banana", "cherry"]

// .substring() in js
//substring() – Extract characters between two indexes

//Syntax: string.substring(startIndex, endIndex)

//Example:

const str4 = "JavaScript";

// Basic usage
console.log(str4.substring(0, 4)); // "Java"

// Only one argument
console.log(str4.substring(4)); // "Script"

// Start > End? No problem!
console.log(str4.substring(7, 4)); // "Scr" (it swaps the arguments)

// Negative index? Nope!
console.log(str4.substring(-2)); // "JavaScript" (treats -2 as 0)
