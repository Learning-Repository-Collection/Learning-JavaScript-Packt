
function sayDay(day) {
    switch(day) {
        case 1: console.log("Sunday");
            break;
        case 2: console.log("Monday");
            break;
        default:
            console.log("We live in a binary world!");
    }
}
sayDay(1); // Sunday
sayDay(3); // We live in a binary world!

function sayDay(day) {
    switch(day) {
        case 1: console.log("Sunday");
        case 2: console.log("Monday");
            break;
        default:
            console.log("We live in a binary world!");
    }
}
sayDay(1); // Sunday
sayDay(3); // We live in a binary world!

function debug(level, msg) {
    switch(level) {
        case "INFO":
        case "WARN":
        case "DEBUG": console.log("level: " + msg);
            break;
        case "ERROR": console.error(msg);
    }
}

debug("INFO", "Info Message");
debug("DEBUG", "Info Message");
debug("ERROR", "Fatal Exception");