

var sum = function() {
    var i, total = 0;
    for(i = 0; i < arguments.length; i+= 1) {
        total += arguments[i];
    }
    var args = Array.prototype.slice.call(arguments);
    console.log(args);
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(sum(1, 2, 3, 4, 5));


var multiplication = function() {
    var i, total = 1;
    for(i = 0; i < arguments.length; i+=1) {
        total *= arguments[i];
    }
    return total;
};
console.log(multiplication(1, 2, 3, 4, 5));
console.log(multiplication(1, 2, 3, 4, 5, 6, 7, 8, 9));

function add() {}
add();

var subtract = function() {

};
subtract();

var person = {
    name: 'Albert Einstein',
    age: 66,
    greet: function() {
        console.log(this.name);
    }
};
person.greet();