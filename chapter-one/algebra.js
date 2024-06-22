
var a = 25;
a = +a;
console.log(a); // 25

var b = "70";
console.log(typeof b); // string
b = +b;  // converts string to number
console.log(b); // 70
console.log(typeof b); // number

var c = "foo";
c = +c;  // converts to a number
console.log(c);  // NaN
console.log(typeof c);  // number

var zero = "";
zero += zero;  // empty strings are converted to zero
console.log("Zero: " + zero);
console.log(typeof zero);

var a = 1;
var b = a++;
console.log(a); // 2
console.log(b); // 1

var a = 1;
var b = ++a;
console.log(a);
console.log(b);

var a, b, c;
a = b = c = 0;
console.log(a + " " + b + " " + c);