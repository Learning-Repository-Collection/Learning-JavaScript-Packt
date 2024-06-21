
console.log("Hippopotamus chewing gum");
console.log('Single quotes hippopotamus');
console.log("Broken \n lines");

var s = new String("dummy"); // making a string object
console.log(s);                           // prints out "dummy"
console.log(typeof s);                    // prints out "object"

var objString = new String("1" + "2");   // Create a string primitive
console.log(typeof objString);                        // "object"

// Making Helper Functions
console.log("Hello".length);             // 5
console.log("Hello".charAt(0));          // "H"
console.log("Hello".charAt(1));          // "e"
console.log("Hello".indexOf("e"));       // 1
console.log("Hello".lastIndexOf("l"));   // 3
console.log("Hello".startsWith("H"));    // true
console.log("Hello".endsWith("o"));      // false
console.log("Hello".includes("X"));      // false

var splitStringByWords = "Hello World".split(" ");
console.log(splitStringByWords);         // ["Hello", "World"]

var splitStringByChars = "Hello World".split("");
console.log(splitStringByChars);         // splits by all the individual characters

console.log("lowercasestring".toUpperCase());   // "LOWERCASESTRING"
console.log("UPPERCASESTRING".toLowerCase());   // "uppercasestring"
console.log("There are no spaces in the end ".trim()); // removes all the spaces at the end

console.log(`string text on first line
    string text on second line `);