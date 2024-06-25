
'use strict';

function foo() {
    'use strict';
}

function sloppyFunc() {
    // sloppyVar = 123;
} sloppyFunc(); // creates global variable `sloppyVar`
console.log(sloppyVar);

function strictFunc() {
    'use strict';
    // strictVar = 123;
}
strictFunc(); // ReferenceError: strictVar isn't defined;

