
var Person = function(name, age) {
    this.name = name;
    this.age = age;
};

Person.prototype.greet = function() {
    return this.name;
};

Person.prototype.getAge = function() {
    return this.age;
}

var albert = new Person('Albert Einstein', 19);
console.log(albert.greet());
console.log(albert.getAge());

// call()
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

var person = {
    name: 'Alice'
};

greet.call(person, 'Hello', '!');


// apply()
function newGreet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

var person = {
    name: 'Alice',
};

greet.apply(person, ['Hi', '.']);