const greet1 = require('./greet1.js') // .js kann man weglassen

console.log("05_modules");

console.log("Hallo Welt");

// greet1 ist eine Referenz auf eine Funktion
greet1();

const variables = require('./variables');

console.log(variables.str1);
console.log(variables.str2);
console.log(variables.str3);

const greet2 = require('./greet2.js');

greet2.greet();

const greet3 = require('./greet3.js');


greet3.greetAlsKey();



const Greet4 = require('./greet4');

let greeting = new Greet4;

greeting.greet();