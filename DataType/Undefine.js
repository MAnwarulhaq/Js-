// What is Undefine
//In JavaScript, undefined ka matlab hota hai "kisi cheez ki value abhi tak assign nahi hui."

//Variable declare kiya ho, lekin value assign na ki ho:
let x;
console.log(x); // undefined

// Function kuch return na kare:
function myFunction() {}
console.log(myFunction()); // undefined

// Object mein property na ho:
let obj = { name: "John" };
console.log(obj.age); // undefined

//Array ka out-of-bounds index access karo:
let arr = [1, 2, 3];
console.log(arr[5]); // undefined
