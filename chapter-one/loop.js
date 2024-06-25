
// while loop
var i = 0;
while(i < 10) {
    i = i + 1;
    console.log(i);
}

// do while loop
var count = 1;
do {
    console.log("Count is: " + count);
    count++;
} while (count <= 5);

// for loop
for(var i = 0; i < 5; i++) {
    console.log("Hello");
}

// optional for loop
var x = 0;
for(; x<5; x++) {
    console.log("Hello");
}

var n = 0;
var o = new String("0");
var s = "0";
var b = false;

console.log(n === n); // true - same values for numbers
console.log(o === o); // true - non numbers are compared for their values
console.log(s === s); // true - ditto

console.log(n === o); // false - no implicit type conversion, types are different
console.log(n === s); // false - types are different
console.log(o === s); // false - types are different
console.log(null === undefined); // false
console.log(o === null); // false
console.log(o === undefined); // false