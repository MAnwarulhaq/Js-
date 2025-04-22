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
