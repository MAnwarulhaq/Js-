// What is do while loop?
// A do...while loop in JavaScript is used when you want to run a block of code at least once, and then repeat it as long as a certain condition is true.

//Syntax:
do {
    // code block to be executed
  } while (condition);
//Example:
let i = 0;

do {
  console.log("Number is: " + i);
  i++;
} while (i < 5);
//Output: Number is: 0 Number is: 1 Number is: 2 Number is: 3 Number is: 4

//Even if the condition is false at the beginning, the code inside the do block will run once.
//Example when condition is false initially:
const a = 10;
do {
  console.log("Number is: " + a);
  i++;
}while (a < 5);
//Output: Number is: 10

  