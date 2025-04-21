// What is continue?
//The continue statement skips the current iteration of a loop and jumps to the next iteration, without exiting the whole loop.

// Example with for loop:
for (let i = 0; i < 5; i++) {
    if (i === 2) {
      continue; // Skip the iteration when i is 2
    }
    console.log(i); // Output: 0, 1, 3, 4
  }

  // Example with while loop:
let j = 0;
while (j < 5) {
    j++;
    if (j === 3) {
      continue; // Skip the iteration when j is 3
    }
    console.log(j); // Output: 1, 2, 4, 5
  }