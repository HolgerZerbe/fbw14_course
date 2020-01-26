var name = "Peter";
var alter = 30;
var verheiratet = true;

console.log(typeof verheiratet);

if (verheiratet === true) {
    console.log(`${name} ist verheiratet`);
} else {
    console.log(`${name} ist nicht verheiratet`);
}

verheiratet = 'true';

console.log(typeof verheiratet);

if (verheiratet === true) {
    console.log(`${name} ist verheiratet`);
} else {
    console.log(`${name} ist nicht verheiratet`);
}

// Aufgabe:

// Schreibe ein Conditional Statement, dass prüft ob Peter über 30 Jahre alt ist.
// Falls ja, dann schreibe "Peter ist über dreißig", falls nein, dann schreibe "Peter
// ist unter dreißig"

// Peter ändert seinen Namen in Max. Prüfe ob Peter Max heißt, falls ja, dann schreibe "Peter
// hat sienen Namen geändert". Ansonsten schreibe nichts.

if (alter > 30) {
    console.log(`${name} ist über 30`);
} else if (alter < 30) {
    console.log(`${name} ist unter 30`);
} else {
    console.log(`${name} ist genau 30`);
}

name = "Max";

if (name !== "Peter") {
    console.log(`Peter hat seinen Namen in ${name} geändert.`);
}

// Unterschied zwischen:
// =    : Zuweisungs-Operator
// ==   : Vergleichs-Operator, der prüft, ob der Wert von links und rechts gleich ist
// ===  : Vergleichs-Operator, der prüft, ob der Wert von links und rechts gleich ist
//        und prüft ob der Datentyp von links und rechts gleich ist

var x = 5;
if (x = 7) { // wir setzten x = 7 und fragen, ob die Zuweisungs-Operation erfolgreich war
    console.log(`x ist 5`);
}

console.log(`x = ${x}`);

var y = 10;
if (y == 10) {
    console.log(`y ist 10`);
}

console.log(y);

if (y == `10`) { // '10' wird nach number konvertiert und dann mit y verglichen weil y Datentyp number ist
    console.log(`y ist '10'`);
}

if (y === '10') {
    console.log(`y ist '10', also der String`);
} else {
    console.log(`y ist nicht der string 10`);
}

if (y === 10) {
    console.log(`y ist 10, also die Zahl`);
}

if (alter > 30) {
    console.log(`Peter ist älter als 30`);
}

if (alter >= 30) {
    console.log(`Peter ist älter als 30 oder genau 30`);
}

if (alter <= 30) {
    console.log(`Peter ist jünger als 30 oder genau 30`);
}

// Zusammengesetzte Conditional-Statements

var a = 15;

if (a >= 15) {
    console.log(`a ist größer oder gleich 15`);
}

if (a >= 15 && a <= 40) {
    console.log(`a ist größer oder gleich 15 und kleiner oder gleich 40`);
} else if (a >= 200 && a <= 250) {
    console.log(`a ist zwischen 200 und 250`)
}

// Aufgabe
//
// a) Definiere eine neue Variable alterVonKlaus und setze sie auf einen Wert von zwischen -10 und 90.
// b) Definiere ein Conditional-Statement das auf Basis von alterVonKlaus ausgibt, in welchem Lebensabschnitt er sich befinden könnte:
//    Unter 0, Klaus ist noch nicht geboren
//    0-21, Klaus ist noch nicht erwachsen
//    21-65, Klaus ist ein erwachsener Mann
//    65-80, Klaus ist ein Opa
//    über 80, Klaus erlebt seine letzten Tage 


var alterVonKlaus = 88;

if (alterVonKlaus < 0) {
    console.log(`Klaus ist noch nicht geboren`);
} else if (alterVonKlaus >= 0 && alterVonKlaus < 21) {
    console.log(`Klaus ist noch nicht erwachsen`);
} else if (alterVonKlaus >= 21 && alterVonKlaus < 65) {
    console.log(`Klaus ist ein erwachsener Mann.`);
} else if (alterVonKlaus >= 65 && alterVonKlaus <= 80) {
    console.log(`Klaus ist ein Opa`);
} else if (alterVonKlaus > 80) {
    console.log(`Klaus darf froh sein, noch bei uns zu sein`);
}


var ampelFarbe = `gruen`;

if (ampelFarbe === `gruen` || ampelFarbe === `gelb` || ampelFarbe === `rot`) {
    console.log(`Ampel funktioniert`);
} else {
    console.log(`Ampel funktioniert nicht`);
}

// Knast-Bedingung

var zustand = `gesund`;
var strafmuendig = 14;

if ((zustand === `gesund` || zustand === `krank` || zustand === `tot`) && alter >= strafmuendig) {
    console.log(`knast`);
} else {
    console.log(`elternknast`);
}

// switch conditonal statement

var job = `lehrer`;

switch (job.toUpperCase()) {
    case `LEHRER`:
        console.log(`Er unterrichtet Studenten`);
        break;
    case `TAXIFAHRER`:
        console.log(`Er fährt ein Taxi durch Berlin`);
        break;
    case `POLIZIST`:
        console.log(`Er kämpft gegen die Kriminalität`);
        break;
    default:
        console.log(`Er arbeitet nicht`);
}
console.log(job);
console.log(job.toUpperCase());

