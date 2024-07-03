

var santa = {
    say: function () {
        console.log("ho ho ho");
    }
}
santa.say();

// function statement
function eventHandler(event) {
    event();
}

eventHandler(function() {
    // do a lot of event related things
    console.log("Event fired");
});

var shape;
var shape_name = "SQUARE";
if(shape_name === "SQUARE") {
    shape = function() {
        return "drawing square";
    }
}
else {
    shape = function() {
        return "shape square";
    }
}
console.log(shape());