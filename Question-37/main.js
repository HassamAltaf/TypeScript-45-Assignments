// Question no: 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I am a Programmer"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I am a C programmer");
