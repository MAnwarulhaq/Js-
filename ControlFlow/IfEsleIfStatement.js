//In JavaScript, the if...else if...else statement is used to execute different blocks of code based on different conditions. Here's the basic syntax:
if (condition1) {
    // code to run if condition1 is true
  } else if (condition2) {
    // code to run if condition2 is true
  } else if (condition3) {
    // code to run if condition3 is true
  } else {
    // code to run if none of the above conditions are true
  }

  //Example:
  let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

//The switch statement in JavaScript is used to perform different actions based on different values of a single expression. It's a cleaner alternative to multiple if...else if blocks when you're checking the same variable against different values.
//Syntax:
switch (expression) {
    case value1:
      // code to run if expression === value1
      break;
    case value2:
      // code to run if expression === value2
      break;
    // you can have as many cases as you need
    default:
      // code to run if none of the cases match
  }

  //Example:
  let day = 3;

  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    default:
      console.log("Another day");
  }
  //Output: Wednesday
// What is break statement in switch case
//break stops the execution of more case blocks once a match is found.
