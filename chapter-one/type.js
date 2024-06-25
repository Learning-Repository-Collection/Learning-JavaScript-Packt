

var fortyTwo = 42;
console.log(fortyTwo.toString()[1]);

// types
console.log(typeof 1);
console.log(typeof "1");
console.log(typeof {age: 39});
console.log(typeof Symbol());
console.log(typeof undefined);
console.log(typeof true);

// casting
var t = 1;
var u = "" + t; // implicit coercion
console.log(typeof t); // "number"
console.log(typeof u); // "string"
var v = String(t); // Explicit coercion
console.log(typeof v); // "string"
var x = null;
console.log("" + x); // "null"

var a = "abc";
console.log(a.length);
console.log(a.toUpperCase());
