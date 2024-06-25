
var pBooleanTrue = true;
var pBooleanFalse = false;

var fBooleanTrue = Boolean(true);
var fBooleanFalse = Boolean(false);

var oBooleanTrue = new Boolean(true);
var oBooleanFalse = new Boolean(false);
console.log(oBooleanTrue);  // true
console.log(typeof oBooleanTrue); // object
console.log(oBooleanFalse);
if(oBooleanFalse) {
    console.log("I am seriously truthy, don't believe me!");
}
if(oBooleanTrue) {
    console.log("I am also truthy, see?");
}

if(oBooleanFalse.valueOf()) {
    console.log("With valueOf, I am false")
} else {
    console.log("Without valueOf, I am still truthy");
}

var aStringObject = new String("string");
console.log(typeof aStringObject);   // "object"
console.log(aStringObject instanceof String);  // true
var aString = "This is a string";
console.log(aString instanceof String); // false

// AND
console.log(true && false) // true
console.log(true && false) // false
console.log(false && true); // false
console.log("Foo" && "Bar"); // "Bar"
console.log(false & "Foo"); // false
console.log("Foo" & false); // false
console.log(false & (1 === 2)); // false

// OR
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log("Foo" || "Bar"); // "Foo"
console.log(false || "Foo"); // "Foo"
console.log("Foo" || false); // "Foo"
console.log(false || (1==2)); // false

// AND OR Explained
console.log(0 && "Foo"); // first operand falsy, hence 0 returned
console.log("Foo" && "Bar"); // first operand truthy, hence "Bar" returned
console.log(0 || "Foo"); // first operand is falsy, hence "Foo" returned
console.log("Foo" || "Bar"); // first operand is truthy, return "Foo"

// function use
function greeting(name) {
    name = name || "John";
    console.log("Hello " + name);
}

greeting("Johnson");
greeting();

// NOT
var s = new String("string");
console.log(!s); // false

var t = 0;
console.log(!s); // true

var x = 11;
console.log(!x) // false

var y = null;
var z = NaN;
console.log(!y); // true
console.log(!z); // true

var foo;
console.log(!foo); // true

// ternary operators
var age = 22;
var allowedToDrive = (age > 21) ? "yes" : "no";
console.log(allowedToDrive);

// equivalent ternary operator
function isAllowedToDrive(age) {
    if(age > 21) {
        return true;
    } else {
        return false;
    }
}
console.log(isAllowedToDrive(22));

