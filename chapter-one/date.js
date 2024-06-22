
var dataObject = new Date();
var twoThousandFifteen = new Date("December 31, 2015 23:59:59");
var christmas = new Date(2015, 11, 25);
var newChristmas = new Date(2015, 11, 25, 21, 0, 0);
console.log(dataObject + " ");
console.log(twoThousandFifteen + " ");
console.log(christmas + " ");
console.log(newChristmas + " ");

var today = new Date();
console.log(today.getDate());
console.log(today.getMonth());
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.getMilliseconds());

// gives number of ms since January 1, 1970 00:00:00 UTC
console.log(today.getTime());
console.log(today.getTimezoneOffset());

// Calculating elapsed time
var start = Date.now();
// looping for a long time
for(var i = 0; i < 100000; i++);
var end = Date.now();
var elapsed = end - start; // time elapsed in seconds
console.log(elapsed);