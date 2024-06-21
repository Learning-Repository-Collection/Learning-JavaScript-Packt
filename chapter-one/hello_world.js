
function sayHello(what) {
    return "Hello " + what;
}
console.log(sayHello("world"));

// a one line comment

/* this is a longer,
   multi-line comment
 */

var a;                 // declares a variable but is undefined
var b = 0;
console.log(b);        // 0
console.log(a);        // undefined
console.log(a + b)     // NaN

const area_code = '515';

var aNumber = 555;
var aFloat = 555.0;

console.log("Max Value: " , Number.MAX_VALUE);
console.log("Min Value: " , Number.MIN_VALUE);
console.log("Positive Infinity: ", Number.POSITIVE_INFINITY);
console.log("Negative Infinity: ", Number.NEGATIVE_INFINITY);