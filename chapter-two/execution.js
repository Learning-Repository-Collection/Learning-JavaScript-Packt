

console.log(a); // undefined
var a = 1;

b = 1;
var b;
console.log(b);


var c;  // compilation
c = 1;  // execution
console.log(c);

var c;  // compilation
console.log(c);
c = 1; // execution

foo();
function foo() {
    console.log(d);  // undefined
    var d = 1;
}

function foo() {
    var a;
    console.log(a);
    a = 1;
}