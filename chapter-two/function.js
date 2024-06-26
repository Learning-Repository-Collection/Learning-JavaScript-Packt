

// function declaration
function add(a, b) {
    return a + b;
}
c = add(1, 2);
console.log(c); // prints 3


// function expression
var add = function(a, b) {
    return a + b;
}
c = add(1, 2);
console.log(c);

// factorial recursion
var facto = function factorial(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
};
console.log(facto(3));

// self-invoking functions
(function sayHello() {
    console.log("hello!");
}) ();


function changeCase(val) {
    return val.toUpperCase();
}

function demofunc(a, passfunction) {
    console.log(passfunction(a));
}

demofunc("smallcase", changeCase);

var looper = function(x) {
    if(x % 5 === 0) {
        return;
    }
    console.log(x);
}
for(var i = 0; i < 10; i++) {
    looper(i);
}

var say = console.log;
say("I can also say things");

var validateDataForAge = function(data) {
    person = data();
    console.log(person);
    if(person.age < 1 || person.age > 99) {
        return true;
    } else {
        return false;
    }
};

var errorHandlerForAge = function(error) {
    console.log("Error while processing age");
};

function parseRequest(data, validateData, errorHandler) {
    var error = validateData(data);
    if(!error) {
        console.log("no errors");
    } else {
        errorHandler();
    }
}

var generateDataForScientist = function() {
    return {
        name: "Albert Einstein",
        age: Math.floor(Math.random() * (100 - 1)) + 1,
    };
};

var generateDataForComposer = function() {
    return {
        name: "J S Bach",
        age: Math.floor(Math.random() * (100 - 1)) + 1
    }
}

// parse request
parseRequest(generateDataForScientist, validateDataForAge, errorHandlerForAge);
parseRequest(generateDataForComposer, validateDataForAge, errorHandlerForAge);