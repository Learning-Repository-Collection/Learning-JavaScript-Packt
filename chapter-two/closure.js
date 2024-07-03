

var outer = 'I am outer'; // define a value in global scope
function outerFn() { // declare a function in global scope
    console.log(outer);
}
outerFn(); // prints - I am outer


var out = 'Outer';  // variable declared in global scope
var copy;
function outerFn() {  // function declared in global scope
    var inner = 'Inner';  // variable has function scope, can't be accessed from outside

    function innerFn() {   // inner function within outer function
        console.log(out);
        console.log(inner)
    }

    copy = innerFn;  // store reference to inner function

}

outerFn();
copy();


var Out = 'outer';
var newCopy;
function outerrFn() {
    var In = 'inner';
    function innerFn(param) {
        console.log(Out);
        console.log(In);
        console.log(param);
        console.log(magic);
    }
    copy = innerFn;
}
console.log("Doesn't work " + magic); // Error - magic not defined
var magic = "Magic";
outerrFn();
copy("copy");
