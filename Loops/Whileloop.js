// What is while loop?
// The while loop is used to execute a block of code as long as a specified condition is true. It's useful when you don't know in advance how many times you want to loop, and the condition will determine when to stop.
// Basic Syntax:
while (condition) {
    // code runs as long as condition is true
  }
// Example:
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
// Output: 1 2 3 4 5
// The loop continues until i is greater than 5.

//Example: Wait for a random number
let num = 0;

while (num !== 7) {
  num = Math.floor(Math.random() * 10); // random 0–9
  console.log("Generated:", num);
}
// Output: Generated: 3 Generated: 7 (or any other random number until 7 is generated)