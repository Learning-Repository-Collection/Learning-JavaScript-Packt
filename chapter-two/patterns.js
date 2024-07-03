

// timers and callbacks
function delay(message) {
    setTimeout( function timerFn() {
        console.log(message);
    }, 1000);
}

delay("Hello World");


// private variables
function PrivateTest() {
    var points  = 0;
    this.getPoints = function() {
        return points;
    };
    this.score = function() {
        points++;
    };
}

var priv = new PrivateTest();
priv.score();
priv.score();
console.log(priv.points); // undefined
console.log(priv.getPoints());


// loops & scopes

for(var i = 1; i <= 5; i++) {
    setTimeout( function delay() {
        console.log(i);
    }, i*100);
}

for(var i = 1; i <= 5; i++) {
    (function(j) {
        setTimeout( function delay() {
            console.log(j);
        }, j* 100);
    }) (i);
}

var moduleName = function() {
    // private state
    // private functions
    return {
        // public state
        // public variables
    }
}

var superModule = (function() {
    var secret = 'supersecretkey';
    var passcode = 'nuke';

    function getSecret() {
        console.log( secret );
    }

    function getPassCode() {
        console.log( passcode );
    }

    return {
        getSecret : getSecret,
        getPassCode : getPassCode
    };

}) ();
superModule.getSecret();
superModule.getPassCode();

// bad
const foo = function() {

};

// good
function foo() {

}