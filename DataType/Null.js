// What is null?
//null is a special value in JavaScript that means:

// ❝ intentionally empty ❞
//Like: “Yahan kuch hona chahiye tha, but abhi kuch nahi hai.”
let car = null;

console.log(car);        // null
console.log(typeof car); // ⚠️ "object" 

//When do we use null?
// - When we want to indicate that a variable should have a value, but it doesn't yet.
//Jab tum khud empty value assign karna chahte ho.
//Jab kisi cheez ka future value expected ho.

let userProfile = {
    name: "Haadi",
    bio: null // abhi empty hai, baad mein fill hoga
  };

  //Checking for null:
  if (userProfile.bio === null) {
    console.log("No bio set yet");
  }
  

  //Difference between null and undefined:
 // nullnn                   |                undefined
// You set it yourself       | JS sets it when variable is unassigned
// Means intentional nothing | Means missing or not yet defined

let a;
let b = null;

console.log(a); // undefined
console.log(b); // null

