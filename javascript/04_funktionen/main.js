function halloPlaneten() {
    console.log(`Hallo Welt`);
    console.log(`Hallo Sonne`);
    console.log(`Hallo Mond`);
    console.log(`Hallo Jupiter`);
    console.log(`Hallo Saturn`);
}

halloPlaneten();
halloPlaneten();
halloPlaneten();


// Aufgabe:
// Schreibe eine Funktion die das Ergebnis von 1+1 auf der Console ausgibt.


function einsPlusEins(a) {
    var b = a + a;
    console.log(`Das Ergebis von a + a (a = ` + a + `) ist = ` + b);
}

einsPlusEins(250);


// Schreibe eine Funktion intro die einen kleinen Text über Euch auf der Console ausgibt.

function intro() {
    console.log(`Mein Name ist Holger.
Ich bin 50 Jahre alt.
Ich wohne in Berlin.`);
}

intro();

// 2 Parametern
function summe(a, b) {
    console.log(`Die Summe von ` + a + ` und ` + b + ` ist = ` + (a + b));
}

summe(100, 300);

// 1 Parameter 


function sagMeinenNamen(name) {
    console.log(`Dein Name ist ` + name);
}
var name = "Holger";
sagMeinenNamen(name);

// Aufgabe:
//
// Schreibe eine Funktion wieIstDasWetter, die einen Parameter wetter entgegen nimmt.
// Wenn wetter dem String "regen" entspricht, dann sol wieIstDasWetter auf der Console 
// "Es regnet" ausgeben.
// Entsprechend den Parameterwerten "sonne" und "schnee" sollen andere passende Sätze 
// ausgegeben werden.

function wieIstDasWetter(wetter) {
    if (wetter === `regen`) {
        console.log(`Es regnet.`);
    } else if (wetter === `sonne`) {
        console.log(`Es scheint die Sonne.`);
    } else if (wetter === `schnee`) {
        console.log(`Johnny kokst!`);
    }
}

wieIstDasWetter(`regen`);
wieIstDasWetter(`sonne`);
wieIstDasWetter(`schnee`);


// Funktionen mit Rückgabewerten

var hw = `hallo welt`;
console.log(hw);

function gebeHalloWeltZurück() {
    return `hallo welt zurückgegeben durch eine funktion`;
}

var hwf = gebeHalloWeltZurück();

console.log(hwf);

function plusEins(x) {
    return x + 1;
}
var y = plusEins(6);
console.log(y);


// Aufgabe:

// Schreibe eine Funktion avg die den Durchschnitt 
//  von zwei Parametern a und b berechnet und zurückgibt.
// Rufe avg mit 15 und 5 auf und schreibe den Wert in die Konsole

function avg(a, b) {
    return (a + b) / 2;
}

var average = avg(15, 5);
console.log(average);

// Aufgabe:

// Schreibe eine Funktion gibIntro die einen String zurückgibt,
// der Euch beschreibt mit 5 Parametern.
// Gib den Text in der Konsole aus nach dem Zurückgeben durch die Funktion.


function gibIntro(vorname, nachname, wohnort, lieblingshobby, lieblingsurlaubsziel) {
    return `Mein Name ist ${vorname} ${nachname}.
Mein Wohnort ist ${wohnort}.
Mein Lieblingshobby ist ${lieblingshobby}, mein liebtes Urlaubsziel ist ${lieblingsurlaubsziel}.`
}

var ausgabe = gibIntro(`Holger`, `Zerbe`, `Berlin`, `Lehrer ärgern`, `Föhr`);
console.log(ausgabe);

function schreibeIntro() {
    console.log(gibIntro(`Holger`, `Zerbe`, `Berlin`, `Lehrer ärgern`, `Föhr`));
}

schreibeIntro();

// hoisting - Funktionen können vor Ihrer Definition ausgeführt werden:

dummyFunction();

function dummyFunction() {
    console.log(`Dummy Function`);
}
dummyFunction();

var dv = dummyValue();
console.log(dv);

// function statement - werden später ausgewertet
function dummyValue() {
    return `dummy Value`;
}

console.log(dummyValue());


// console.log(dummyValueExpression());  --hoisting funktioniert nicht

// function expression - werden sofort ausgewertet
var dummyValueExpression = function () {
    return `Dummy Value Expression`
}

console.log(dummyValueExpression());


// Schreibe eine Funktion gehtInRente die als Parameter einen Namen
// und ein Geburtstdatum hat. Die Funktion soll auf die Konsole das
// aktuelle Alter ausgeben. Gegeben sei, dass in D alle mit 67 in Rente 
// gehen. Die Funktion soll zurückgeben, in wievielen Jahren die Person
// in Rente geht.


function gehtInRente(name, geburtsjahr) {
    var alter = 2019 - geburtsjahr;
    var arbeitsjahre = 67 - alter;
    if (arbeitsjahre === 0) {
        return `${name} ist ${alter} Jahre alt und geht dieses Jahr in Rente.`;
    } else if (arbeitsjahre < 0) {
        return `${name} ist ${alter} und ist bereits in Rente.`
    } else return `${name} ist ${alter} Jahre alt und geht in ${arbeitsjahre} Jahren in Rente`;
}
var rentenfall_1 = gehtInRente(`Holger`, 1969);
var rentenfall_2 = gehtInRente(`Klaus`, 1939);
var rentenfall_3 = gehtInRente(`Monika`, 1952);
console.log(rentenfall_1);
console.log(rentenfall_2);
console.log(rentenfall_3);


/// Nikolaus-Funktion zum Debuggen

function dasHausVomNikolaus() {
    console.log(`das`);
    console.log(`ist`);
    console.log(`das`);
    console.log(`haus`);
    console.log(`vom`);
    console.log(`ni`);
    console.log(`ko`);
    console.log(`laus`);

}

dasHausVomNikolaus();



