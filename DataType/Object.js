//What is an Object in JS?
// An object is a collection of properties, where each property is a key-value pair. Objects can hold multiple values and more complex entities.
//An object is a collection of key-value pairs. It’s used to group related data and functions together.
// how to create an object in JavaScript?
let person = {
    name: "Haadi",
    age: 25,
    isDeveloper: true
};

//    Accessing object properties:
console.log(person.name); // "Haadi"
console.log(person["age"]);  // 25
console.log(person.age); // 25
console.log(person.isDeveloper); // true

// Updating values:
person.age = 26;
person["name"] = "Haadi Dev";
console.log(person.age); // 26
console.log(person.name); // "Haadi Dev"

// Adding new properties:
person.country = "Pakistan";
console.log(person.country); // "Pakistan"
console.log(person); // { name: "Haadi Dev", age: 26, isDeveloper: true, country: "Pakistan" }

// Deleting properties:
delete person.isDeveloper;
console.log(person); // { name: "Haadi Dev", age: 26, country: "Pakistan" }
console.log(person.isDeveloper); // undefined

// Object with functions (methods):
let user = {
    username: "haadiDev",
    greet: function () {
        console.log("Hello from " + this.username);
    }
};

user.greet(); // "Hello from haadiDev"

//Or get keys/values like this:
console.log(Object.keys(person));   // ["name", "age", "country"]
console.log(Object.values(person)); // ["Haadi Dev", 26, "Pakistan"]

// Object inside of array:
let users = [
    { name: "Haadi", age: 25 },
    { name: "Ali", age: 22 }
  ];
  
  console.log(users[1].name); // "Ali"
    console.log(users[0].age); // 25  
