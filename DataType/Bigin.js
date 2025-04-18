// What is BigInt?
// JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number.
//JavaScript integers are only accurate up to 15 digits:
console.log(Number.MAX_SAFE_INTEGER); 
// 9007199254740991

// Solution: BigInt!
const big = 9007199254740991n; // 'n' laga ke BigInt banta hai
const anotherBig = BigInt("900719925474099123456789");

console.log(big);         // 9007199254740991n
console.log(typeof big);  // 'bigint'
