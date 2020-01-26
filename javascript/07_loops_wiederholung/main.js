console.log(`Loops Wiederholung`);

for (var i = 0; i < 10; i++) {
    console.log(`Loops Wiederholung in einer Schleife, der Schleifenzähler ist = ${i}`);
}

// Aufgabe:

// gib den Satz: "hallo, mein name ist " * deinen Namen 
// 5 mal asu. Gib dabei den aktuellen Index multipliziert mit 10 aus.

for (var i = 0; i < 5; i++) {
    console.log(`Hallo mein Name ist Holger, der Schleifenzähler mit 10 multipliziert ist = ${i*10}`);
}

// For-Schleifen und Arrays

var namen = [`Peter`, `Hans`, `Julia`, `Astrid`, `Tim`];

for (var i = 0; i < namen.length; i++) {
    console.log(namen[i]);
}


var arrayLength = 10;

var numArray = [];

for (var i = 1; i <= arrayLength; i++) {
    numArray.push(i);
}

console.log(numArray);


var numArray2 = [];

for (var i = 0; i < arrayLength; i++) {
    numArray2.push(i + 1);
}

console.log(numArray2);


// Aufgabe:

// Programmiere eine For-Schleife, die alle ungeraden Zahlen bis 100 ausgibt.



var ungeraderArray = [];

for (var i = 0; i <= 100; i++) {


    if (Math.floor(i / 2) !== (i / 2)) {
        ungeraderArray.push(i);
    }
}

console.log(ungeraderArray);

// Aufgabe 1:

// gib alle Zahlen zwischen 0 und 100 aus die durch 7 teilbar sind.

// Aufgabe 2:

// Gib alle Zahlen zwischen 1 und 100 aus. Gibt als Zusatzinformation an zu jeder 
// Zahl an, ob sie durch 7 teilbar ist

// Aufgabe 3 (schwierig):

// Programmiere eine Funktion istPrimzahl, die einen Parameter n  entgegennimmt.
// istPrimzahl gibt true zurück, wenn n eine Primzahl ist, ansonsten false


var teilbarDurch7Array = [];

for (var i = 0; i <= 100; i++) {
    if (i % 7 === 0) {
        teilbarDurch7Array.push(i);
    }
}

console.log(teilbarDurch7Array);


var teilbarDurch7Array2 = [];

for (var i = 1; i <= 100; i = i + 1) {


    if (Math.floor(i / 7) !== (i / 7)) {
        teilbarDurch7Array2.push(i);
    } else {
        teilbarDurch7Array2.push(`${i} ist teilbar durch 7!!!`)
    }
}

function istPrimzahl(n) {
    if (n===2) {
        return (`YEAH!!! ${n} ist eine Primzahl = ` + true);
    }

    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return (`${n} ist keine Primzahl = ` + false);
        }
    }
    return (`YEAH!!! ${n} ist eine Primzahl = ` + true);

}

console.log(istPrimzahl(2));
console.log(istPrimzahl(3));
console.log(istPrimzahl(5));
console.log(istPrimzahl(11));
console.log(istPrimzahl(16));
console.log(istPrimzahl(17));
console.log(istPrimzahl(29));
console.log(istPrimzahl(31));
console.log(istPrimzahl(101));
console.log(istPrimzahl(10211));




console.log(teilbarDurch7Array2);

var teilnehmerliste = [{
        gender: `m`,
        name: `Klaus`
    },
    {
        gender: `f`,
        name: `Maria`
    },
    {
        gender: `f`,
        name: `Petra`
    },
    {
        gender: `m`,
        name: `Peter`
    },
    {
        gender: `m`,
        name: `Sebastian`
    },
    {
        gender: `m`,
        name: `Emil`
    },
    {
        gender: `f`,
        name: `Julia`
    },
    {
        gender: `f`,
        name: `Lisa`
    },
    {
        gender: `m`,
        name: `Klaus`
    }
]

var anzahlMaenner = 0;
var anzahlFrauen = 0;

for (var z = 0; z < teilnehmerliste.length; z++) {
    console.log(teilnehmerliste[z].name);
    if (teilnehmerliste[z].gender === "m") {
        anzahlMaenner++;
    } else {
        anzahlFrauen++;
    }
}

console.log(`Die Anzahl der Männer ist = ` + anzahlMaenner);
console.log(`Die Anzahl der Frauen ist = ` + anzahlFrauen);


// Aufgabe:

// gegeben sei folgender String alphabet:

var alphabet = `abcdefghijklmnopqrstuvwxyz`;

// und die Funktion randomNumber

function randomNumber(n) {
    return Math.floor(Math.random() * n)
}

// .. die eine Zufallszahl zwischen 0 und n zurückgibt.

// 1) Schreibe eine Funktion randomString(stringLength) die einen 
// zufälligen String generiert und zurückgibt, der die Länge stringLength hat.
// Verwende als Hilfe die Funktion randomNumber()

// 2) zusätzlich soll randomstring auch Zahlen zwischen 0 und 9 
// mit in den zufälligen String numbers = `01234546789`
// Erweitere randomString hierfür.

// 3) Füge noch zufällige Groß und Kleinschreibung dazu.

function randomString(stringLength) {
    var zufallsString = "";

    for (var i = 0; i < stringLength; i++) {
        var zufallszahl = randomNumber(alphabet.length);
        zufallsString = zufallsString + alphabet.charAt(zufallszahl);
    }
    return zufallsString;
}

var ergebnis = randomString(35);
console.log(ergebnis);


var alphabetArray = alphabet.split("");

function randomString2(stringLength) {
    var zufallsStringAlsArray = [];

    for (var i = 0; i < stringLength; i++) {
        var zufallszahl = randomNumber(alphabetArray.length);
        var zeichenZumPushen = alphabetArray[zufallszahl];
        zufallsStringAlsArray.push(zeichenZumPushen);
    }

    var zufallsString2 = zufallsStringAlsArray.join("");
    return zufallsString2;
}

var ergebnis2 = randomString2(16);
console.log(ergebnis2);


// Aufgabe 2:

var numbers = `01234546789`;
var stringAndNumber = alphabet + numbers;


var stringAndNumberArray = stringAndNumber.split("");

function randomString3(stringLength) {
    var zufallsStringAndNumberAlsArray = [];

    for (var i = 0; i < stringLength; i++) {
        var zufallszahl = randomNumber(stringAndNumberArray.length);
        var zeichenZumPushen = stringAndNumberArray[zufallszahl];
        zufallsStringAndNumberAlsArray.push(zeichenZumPushen);
    }

    var zufallsString3 = zufallsStringAndNumberAlsArray.join("");
    return zufallsString3;
}

var ergebnis3 = randomString3(30);
console.log(ergebnis3);



// Aufgabe 3:



function randomString4(stringLength) {

    var mixedString = alphabet + numbers;
    var zufallsString4 = "";

    for (var i = 0; i < stringLength; i++) {
        var zufallszahl = randomNumber((mixedString.length));
        var zweiteZufallszahl = Math.round(Math.random());
        if (zweiteZufallszahl === 0) {
            zufallsString4 = zufallsString4 + mixedString.charAt(zufallszahl).toUpperCase();
        } else {
            zufallsString4 = zufallsString4 + mixedString.charAt(zufallszahl);
        }
    }
    return zufallsString4;
}

var ergebnis4 = randomString4(35);
console.log(ergebnis4);