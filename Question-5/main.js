// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "Allama Iqbal";
var quote = "A wrong concept misleads the understanding, a wrong deed degrades the whole man, and may eventually demolish the structure of the human ego.";
var message = "".concat(famous_person, " once said, \"").concat(quote, "\"");
console.log(message);