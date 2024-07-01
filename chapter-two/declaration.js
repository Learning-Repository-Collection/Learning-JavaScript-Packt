

// Function Expression
functionOne();
// Error
// "TypeError: functionOne is not a function

var functionOne = function() {
    console.log("functionOne");
};

// Function declaration
functionTwo();
// No Error
// Prints - functionTwo

function functionTwo() {
    console.log("functionTwo");
}

// Never do this - different browsers will behave differently
if(true) {
    function sayMoo() {
        return 'trueMoo';
    }
}
else {
    function sayMoo() {
        return 'falseMsoo';
    }
}
foo();

// do this instead
var sayMoo;
if (true) {
    sayMoo = function() {
        return 'trueMoo';
    };
} else {
    sayMoo = function() {
        return 'falseMoo';
    };
}
foo();
