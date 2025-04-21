// What is forloop?
//used when you know how many times you want to run a block of code.
//Basic Syntax:

for (initialization; condition; increment) {
    // code to run each loop
  }
//Example:
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
  }
//Output: Count: 1 Count: 2 Count: 3 Count: 4 Count: 5  

//Looping through an array:
let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Output: apple, banana, cherry
  }
//Nested for loop:
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
      console.log("i:", i, "j:", j);
    }
  }
//Output: i: 1 j: 1 i: 1 j: 2 i: 2 j: 1 i: 2 j: 2 i: 3 j: 1 i: 3 j: 2