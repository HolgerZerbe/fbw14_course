// Aufgabe 1:
// Erstelle ein Modul countdown.js.
// Dieses soll eine Funktion exportieren,
// welche alle Zahlen von 0 bis 20 ausgibt.

// Aufgabe 2:
// Erstelle ein Modul introduction.js
// welches eine Funktion intro exportiert.
// intro erwartet ein Parameter userInfo.
// userInfo soll ein Objekt sein sein mit den 
// keys firstName, lastName, email und birthYear

// intro soll einen Text ausgeben, der so ungefähr
// so aussieht wie der folgende:

// "Hi, mein Name ist FistName Lastname und 
// meine Email ist email. Ich wurde BirthYear geboren"

const countdown = require('./countdown');

countdown.countdown();

const introduction = require('./introduction');

introduction.intro({
    firstName: "Holger",
    lastName: "Zerbe",
    email: "holzer@nerv.net",
    birthYear: 1969
});


// Aufgabe 3:

// a) Erstelle ein Modul person.js mit folgender Klasse:

// class Person {
//     constructor(
//         firstname,
//         lastname,
//         email,
//         birthYear) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.email = email;
//         this.birthYear = birthYear;
//     }
// }

// b) Importiere Person hier rein
// c) Erstelle 3 verschiedene Personen mit fiktiven Daten
// d) Erweitere Person um eine Methode, die Alter berechnet
//    aufgrund des aktuellen Jahres 2019 und returne dieses.
//    Führe die Methode hier aus

const PersonInTask = require('./person');

// PersonInTask.prototype.alter = function () {
//     this.age = 2019 - this.birthYear;
//     return this.age
// } 



let homer = new PersonInTask("Homer", "Simpson", "homer@springfield.com", 1981);
let marge = new PersonInTask("Marge", "Simpson", "marge@springfield.com", 1982);
let bart = new PersonInTask("Bart", "Simpson", "bart@springfield.com", 2010);

console.log(homer);
console.log(homer.alter());
console.log(homer); 


console.log(marge);
console.log(marge.alter());

console.log(bart);
console.log(bart.alter());
