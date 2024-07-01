

// Global Scope
var a = 1;
function scopeTest() {
    console.log(a);
}
scopeTest(); // prints 1


//Global Scope
var b = 1;
function scopeTest() {
    b = 2; // overwrites global variable 2, you omit 'var'
    console.log(b);
}
console.log(b);
scopeTest();
console.log(b); // global variable overwritten


var scope_name = "global";
function showscopeName() {
    // local variable; only accessible in this function
    var scope_name = "local";
    console.log(scope_name); //
}
console.log(scope_name); // global
showscopeName(); // local


// - GLOBAL SCOPE
var g = 0;
function foo(a) {
    var b = 1;
    // code
    function bar() {
        console.log("a");
    }
    // code
    var c = 2;
}
// foo(); // WORKS
// bar(); // FAILS

function foo() {
    function bar(a) {
        i = 2;  // changing 'i' in the enclosing scope's for-loop
        console.log(a + i);
    }
    for(var i = 0; i < 10; i++) {
        bar(i);
    }
}
// foo();

var a = 1;
// Let's introduce a function -scope
// 1. Add a named function foo() into the global scope
function foo() {
    var a = 2;
    console.log(a); // 2
}
//2. Now call the named function foo()
foo();
console.log(a); // 1

var a = 1;
// Let's introduce a function -scope
// 1. Add a named function foo() into the global scope
(function foo() {
    var a =  2;
    console.log(a); // 2
}) (); // <---- this function executes immediately
console.log(a); // 1

(function foo(b) {
    var a = 2;
    console.log(a + b);
}) (3); // prints 5

function setActiveTab(activeTabHandler, tab) {
    // set active tab
    // call handler
    activeTabHandler();
}
setActiveTab(function () {
    console.log("Setting active tab");
}, 1);
// prints "Setting active tab

var foo = true;
if(foo) {
    let bar = 42; // variable bar is local in this block { }
    console.log(bar);
}
// console.log(bar); // Reference Error


