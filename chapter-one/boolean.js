
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
console.log(false && true);