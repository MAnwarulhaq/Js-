//Write all array method in js

//Looping & Iteration

// Method | What it does
// forEach() | Runs a function for each element (no return)
// map() | Returns a new array with results of a function
// filter() | Returns a new array with elements that pass a test
// reduce() | Reduces array to a single value
// reduceRight() | Same as reduce, but right to left
// some() | Returns true if any element passes a test
// every() | Returns true if all elements pass a test
// find() | Returns first element that passes a test
// findIndex() | Returns index of the first element that passes a test

//forEach() 

// array.forEach(function(currentValue, index, array) {
//     // your code here
//   });
  
var numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log ( number * 2); // Output: 2, 4, 6, 8, 10
});

numbers.forEach(printElement)

function printElement(num, index) {
  console.log("Element at index " + index + ": " + num);
}

// map()
// syntax: array.map(function() {
//     // your code here    
//   });



