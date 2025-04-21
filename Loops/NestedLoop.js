//nested loops in JavaScript are loops inside other loops. They’re useful when you need to work with multi-level structures like 2D arrays, tables, combinations, etc.

//Syntax:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
      console.log(`i: ${i}, j: ${j}`);
    }
  }
//Output: i: 0, j: 0 i: 0, j: 1 i: 1, j: 0 i: 1, j: 1 i: 2, j: 0 i: 2, j: 1

//Example: Looping through a 2D Array
let matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }
//Output: 1 2 3 4 5 6  