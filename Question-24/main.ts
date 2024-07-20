// Question no.24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality with strings


let apple = "apple";

console.log("apple is equal to apple");
console.log(apple == "apple");

// • Tests for inequality with strings

console.log("apple is not equal to apple");
console.log(apple != "apple");

// • Tests using the lower case function

let uppercaseBMW = "BMW";
console.log("BMW is equal to bmw after converting to Lower_Case");
console.log(uppercaseBMW.toLocaleLowerCase() == "bmw");

console.log("BMW is not equal to bmw after converting to Lower_Case");
console.log(uppercaseBMW.toLocaleLowerCase() != "bmw");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let four = 4;
let six = 6;

console.log("four is equal to six");
console.log(four == six);

console.log("four is not equal to six");
console.log(four != six);

console.log("six is greater than four");
console.log(6 > 4);

console.log("four is less than six");
console.log(4 > 6);

console.log("six is greater than or equal to four");
console.log(6 >= 4);

console.log("six is less than or equal to four");
console.log(six <= four);

// • Tests using "and" operators

console.log("six is not equal to four and six is greater than four");
console.log(six != four && six > four);

console.log("six is not equal to four and four is greater than six");
console.log(six != four && four > six);

// • Tests using "or" operators

console.log("six is greater than four or four is not equal to four");
console.log(six > four || four != four);

console.log("six is less than four or four is not equal to four");
console.log(six < four || four != four);

// • Test whether an item is in a array

let cars = ["BMW", "Mustang gt", "Corrola"]
console.log("Mustang gt is include in my cars array");
console.log(cars.includes("Mustang gt"));

// • Test whether an item is not in a array

console.log("Corrola is not include in my cars array");
console.log(!cars.includes("Corrola"));










































