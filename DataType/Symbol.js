// Symbol ka basic syntax:
const sym1 = Symbol();
const sym2 = Symbol('description');

console.log(sym1); // Symbol()
console.log(sym2); // Symbol(description)

// Symbols hamesha unique hote hain:
const a = Symbol('id');
const b = Symbol('id');

console.log(a === b); // false

// Symbols kaam kahan aate hain?
const id = Symbol('id');

const user = {
  name: "Haadi",
  [id]: 12345
};

console.log(user);        // { name: "Haadi", [Symbol(id)]: 12345 }
console.log(user[id]);    // 12345
